$(document).ready(function() {
    $('.persian-datepicker').persianDatepicker({
        format: 'YYYY/MM/DD',
        initialValueType: 'persian',
        autoClose: true
    });

    let installments = [];

    $('#calculateButton').click(function() {
        const contractAmount = parseFloat($('#contractAmount').val());
        const installmentCount = parseInt($('#installmentCount').val());
        const prePayment = parseFloat($('#prePayment').val());
        const startDate = $('#startDate').val();

        if (isNaN(contractAmount) || isNaN(installmentCount) || isNaN(prePayment) || !startDate) {
            alert('لطفاً تمام فیلدها را به درستی وارد کنید.');
            return;
        }

        const installmentAmount = (contractAmount - prePayment) / installmentCount;
        installments = [];

        let currentDate = persianToGregorian(startDate);

        for (let i = 0; i < installmentCount; i++) {
            currentDate.setMonth(currentDate.getMonth() + 1);
            const installmentDate = gregorianToPersian(currentDate);

            installments.push({
                date: installmentDate,
                amount: installmentAmount,
                paid: 0,
                status: 'پرداخت نشده'
            });
        }

        displayInstallments(prePayment, installments);
    });

    function displayInstallments(prePayment, installments) {
        let tableHTML = `
            <h2>پیش پرداخت: ${prePayment.toLocaleString()} ریال</h2>
            <table>
                <thead>
                    <tr>
                        <th>شماره قسط</th>
                        <th>تاریخ سررسید</th>
                        <th>مبلغ قسط</th>
                        <th>واریزی‌ها</th>
                        <th>تاریخ واریز قسط</th>
                        <th>وضعیت</th>
                    </tr>
                </thead>
                <tbody>
        `;

        installments.forEach((installment, index) => {
            let statusClass = '';
            if (installment.status === 'پرداخت شده') {
                statusClass = 'paid';
            } else if (installment.status === 'پرداخت جزئی') {
                statusClass = 'partial';
            } else {
                statusClass = 'unpaid';
            }

            tableHTML += `
                <tr class="${statusClass}">
                    <td>${index + 1}</td>
                    <td>${installment.date}</td>
                    <td>${installment.amount.toLocaleString()}</td>
                    <td><input type="number" class="payment-input" data-index="${index}"></td>
                    <td><input type="text" class="payment-date persian-datepicker" data-index="${index}"></td>
                    <td class="status">${installment.status}</td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
        `;

        $('#scheduleTable').html(tableHTML);
        $('.persian-datepicker').persianDatepicker({
            format: 'YYYY/MM/DD',
            initialValueType: 'persian',
            autoClose: true
        });

        $('.payment-input').on('input', function() {
            const index = $(this).data('index');
            const paymentAmount = parseFloat($(this).val());
            updateInstallmentStatus(index, paymentAmount);
        });
    }

    function updateInstallmentStatus(index, paymentAmount) {
        if (isNaN(paymentAmount)) {
            alert('لطفاً مبلغ واریزی را به درستی وارد کنید.');
            return;
        }

        let remainingAmount = paymentAmount;
        for (let i = 0; i < installments.length; i++) {
            if (i === index) {
                if (remainingAmount >= installments[i].amount - installments[i].paid) {
                    remainingAmount -= (installments[i].amount - installments[i].paid);
                    installments[i].paid = installments[i].amount;
                    installments[i].status = 'پرداخت شده';
                } else {
                    installments[i].paid += remainingAmount;
                    installments[i].status = 'پرداخت جزئی';
                    remainingAmount = 0;
                }
            } else if (i > index && installments[i].status !== 'پرداخت شده') {
                if (remainingAmount >= installments[i].amount - installments[i].paid) {
                    remainingAmount -= (installments[i].amount - installments[i].paid);
                    installments[i].paid = installments[i].amount;
                    installments[i].status = 'پرداخت شده';
                } else if (remainingAmount > 0) {
                    installments[i].paid += remainingAmount;
                    installments[i].status = 'پرداخت جزئی';
                    remainingAmount = 0;
                }
            } else {
                continue;
            }

            if (remainingAmount <= 0) break;
        }

        displayInstallments(parseFloat($('#prePayment').val()), installments);
    }

    $('#downloadButton').click(function() {
        generateWordDocument(installments);
    });

    function generateWordDocument(installments) {
        // Add your docx generation code here
        // For now, we'll just create a dummy function
        alert('در حال تولید فایل Word...');
    }

    function persianToGregorian(persianDate) {
        const dateParts = persianDate.split('/');
        const persianYear = parseInt(dateParts[0]);
        const persianMonth = parseInt(dateParts[1]);
        const persianDay = parseInt(dateParts[2]);

        const gregorianDate = new persianDate([persianYear, persianMonth, persianDay]).toGregorian();
        return new Date(gregorianDate[0], gregorianDate[1] - 1, gregorianDate[2]);
    }

    function gregorianToPersian(gregorianDate) {
        const persianDate = new persianDate(gregorianDate).toLocale('fa');
        return persianDate;
    }
});
