# Shirin-shahr-aghsat-2
کدی که با جی پی تی اصلاح کردم اولین بار 
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دفترچه اقساط پیشرفته - تقویم اصلاح شده</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <style>
        body { font-family: 'Tahoma', sans-serif; }
        .persian-num { font-family: 'Arial', sans-serif; }
        .paid { background-color: #dcfce7 !important; color: #166534; }
        .partially-paid { background-color: #fef3c7 !important; color: #92400e; }
        .overdue { background-color: #fee2e2 !important; color: #dc2626; }
        .penalty-paid { background-color: #dbeafe !important; color: #1e40af; }
        .penalty-unpaid { background-color: #f3e8ff !important; color: #7c3aed; }
        .dropdown-container { position: relative; display: inline-block; }
        .dropdown-content { display: none; position: absolute; background-color: white; min-width: 120px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1; max-height: 200px; overflow-y: auto; border: 1px solid #ccc; }
        .dropdown-content div { color: black; padding: 8px 12px; text-decoration: none; display: block; cursor: pointer; }
        .dropdown-content div:hover { background-color: #f1f1f1; }
        .show { display: block; }
    </style>
</head>
<body class="bg-gray-50">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-center text-blue-800 mb-8">
            <i class="fas fa-calculator mr-3"></i>
            دفترچه اقساط پیشرفته
        </h1>

        <!-- فرم اطلاعات اولیه -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold mb-4 text-gray-700">
                <i class="fas fa-info-circle mr-2"></i>
                اطلاعات قرارداد
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">رقم قرارداد (ریال)</label>
                    <input type="number" id="contractAmount" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="مثال: 100000000">
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">تعداد اقساط (ماه)</label>
                    <input type="number" id="installmentCount" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="مثال: 12">
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">پیش پرداخت (ریال)</label>
                    <input type="number" id="downPayment" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="مثال: 20000000">
                </div>
            </div>

            <!-- تاریخ شروع با dropdown -->
            <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">تاریخ شروع قرارداد</label>
                <div class="flex gap-2">
                    <!-- روز -->
                    <div class="dropdown-container">
                        <button onclick="toggleDropdown('dayDropdown')" class="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span id="selectedDay">روز</span> <i class="fas fa-chevron-down"></i>
                        </button>
                        <div id="dayDropdown" class="dropdown-content">
                            <!-- روزها از 1 تا 31 -->
                        </div>
                    </div>

                    <!-- ماه -->
                    <div class="dropdown-container">
                        <button onclick="toggleDropdown('monthDropdown')" class="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span id="selectedMonth">ماه</span> <i class="fas fa-chevron-down"></i>
                        </button>
                        <div id="monthDropdown" class="dropdown-content">
                            <div onclick="selectMonth(1, 'فروردین')">فروردین</div>
                            <div onclick="selectMonth(2, 'اردیبهشت')">اردیبهشت</div>
                            <div onclick="selectMonth(3, 'خرداد')">خرداد</div>
                            <div onclick="selectMonth(4, 'تیر')">تیر</div>
                            <div onclick="selectMonth(5, 'مرداد')">مرداد</div>
                            <div onclick="selectMonth(6, 'شهریور')">شهریور</div>
                            <div onclick="selectMonth(7, 'مهر')">مهر</div>
                            <div onclick="selectMonth(8, 'آبان')">آبان</div>
                            <div onclick="selectMonth(9, 'آذر')">آذر</div>
                            <div onclick="selectMonth(10, 'دی')">دی</div>
                            <div onclick="selectMonth(11, 'بهمن')">بهمن</div>
                            <div onclick="selectMonth(12, 'اسفند')">اسفند</div>
                        </div>
                    </div>

                    <!-- سال -->
                    <div class="dropdown-container">
                        <button onclick="toggleDropdown('yearDropdown')" class="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span id="selectedYear">سال</span> <i class="fas fa-chevron-down"></i>
                        </button>
                        <div id="yearDropdown" class="dropdown-content">
                            <!-- سال‌ها از ۱۳۸۰ تا ۱۴۵۰ -->
                        </div>
                    </div>

                    <span class="self-center text-gray-500">یا</span>

                    <!-- وارد کردن دستی -->
                    <input type="text" id="manualDate" placeholder="1403/09/20" class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" onchange="parseManualDate()">
                </div>
            </div>

            <button onclick="calculateInstallments()" class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
                <i class="fas fa-calculator mr-2"></i>
                محاسبه اقساط
            </button>
        </div>

        <!-- نمایش خلاصه قرارداد -->
        <div id="contractSummary" class="bg-white rounded-lg shadow-md p-6 mb-6 hidden">
            <h3 class="text-lg font-semibold mb-4 text-gray-700">خلاصه قرارداد</h3>
            <div id="summaryContent"></div>
        </div>

        <!-- پیگیری پرداخت -->
        <div id="paymentTracking" class="bg-white rounded-lg shadow-md p-6 mb-6 hidden">
            <h3 class="text-lg font-semibold mb-4 text-gray-700">
                <i class="fas fa-money-bill-wave mr-2"></i>
                پیگیری پرداخت
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">مبلغ واریزی (ریال)</label>
                    <input type="number" id="paymentAmount" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">تاریخ واریز</label>
                    <input type="text" id="paymentDate" placeholder="1403/09/20" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                
                <div class="flex items-end">
                    <button onclick="applyPayment()" class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
                        <i class="fas fa-plus mr-2"></i>
                        اعمال پرداخت
                    </button>
                </div>
            </div>
        </div>

        <!-- تنظیمات جریمه -->
        <div id="penaltySettings" class="bg-white rounded-lg shadow-md p-6 mb-6 hidden">
            <h3 class="text-lg font-semibold mb-4 text-gray-700">
                <i class="fas fa-exclamation-triangle mr-2"></i>
                تنظیمات جریمه تاخیر
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        <input type="radio" name="penaltyType" value="fixed" checked> 
                        جریمه ثابت روزانه (ریال)
                    </label>
                    <input type="number" id="fixedPenalty" value="300000" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        <input type="radio" name="penaltyType" value="percentage"> 
                        جریمه درصدی از کل قرارداد (درصد روزانه)
                    </label>
                    <input type="number" id="percentagePenalty" value="0.001" step="0.001" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
            </div>
            
            <div class="flex gap-2">
                <button onclick="calculatePenalties()" class="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
                    <i class="fas fa-calculator mr-2"></i>
                    محاسبه جرایم
                </button>
                
                <button onclick="payPenalties()" class="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
                    <i class="fas fa-credit-card mr-2"></i>
                    پرداخت جرایم
                </button>
            </div>
        </div>

        <!-- جدول اقساط -->
        <div id="installmentTable" class="bg-white rounded-lg shadow-md p-6 mb-6 hidden">
            <h3 class="text-lg font-semibold mb-4 text-gray-700">
                <i class="fas fa-table mr-2"></i>
                جدول اقساط ماهانه
            </h3>
            <div id="tableContent"></div>
        </div>

        <!-- جدول جرایم -->
        <div id="penaltyTable" class="bg-white rounded-lg shadow-md p-6 mb-6 hidden">
            <h3 class="text-lg font-semibold mb-4 text-gray-700">
                <i class="fas fa-exclamation-circle mr-2"></i>
                جدول جرایم
            </h3>
            <div id="penaltyTableContent"></div>
        </div>

        <!-- دکمه دانلود -->
        <div class="text-center">
            <button onclick="downloadWord()" class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition duration-200">
                <i class="fas fa-download mr-2"></i>
                دانلود فایل Word
            </button>
        </div>
    </div>

    <script>
        let installments = [];
        let penalties = [];
        let selectedDay = null, selectedMonth = null, selectedYear = null;

        // تولید dropdown ها
        function generateDropdowns() {
            // تولید روزها
            const dayDropdown = document.getElementById('dayDropdown');
            for (let i = 1; i <= 31; i++) {
                const div = document.createElement('div');
                div.textContent = i;
                div.onclick = () => selectDay(i);
                dayDropdown.appendChild(div);
            }

            // تولید سال‌ها از ۱۳۸۰ تا ۱۴۵0
            const yearDropdown = document.getElementById('yearDropdown');
            for (let i = 1380; i <= 1450; i++) {
                const div = document.createElement('div');
                div.textContent = i;
                div.onclick = () => selectYear(i);
                yearDropdown.appendChild(div);
            }
        }

        function toggleDropdown(dropdownId) {
            document.getElementById(dropdownId).classList.toggle("show");
        }

        function selectDay(day) {
            selectedDay = day;
            document.getElementById('selectedDay').textContent = day;
            document.getElementById('dayDropdown').classList.remove("show");
            updateManualDate();
        }

        function selectMonth(month, monthName) {
            selectedMonth = month;
            document.getElementById('selectedMonth').textContent = monthName;
            document.getElementById('monthDropdown').classList.remove("show");
            updateManualDate();
        }

        function selectYear(year) {
            selectedYear = year;
            document.getElementById('selectedYear').textContent = year;
            document.getElementById('yearDropdown').classList.remove("show");
            updateManualDate();
        }

        function updateManualDate() {
            if (selectedYear && selectedMonth && selectedDay) {
                const formattedDate = `${selectedYear}/${selectedMonth.toString().padStart(2, '0')}/${selectedDay.toString().padStart(2, '0')}`;
                document.getElementById('manualDate').value = formattedDate;
            }
        }

        function parseManualDate() {
            const manualDate = document.getElementById('manualDate').value;
            if (manualDate) {
                const parts = manualDate.split('/');
                if (parts.length === 3) {
                    selectedYear = parseInt(parts[0]);
                    selectedMonth = parseInt(parts[1]);
                    selectedDay = parseInt(parts[2]);
                    
                    document.getElementById('selectedYear').textContent = selectedYear;
                    document.getElementById('selectedDay').textContent = selectedDay;
                    
                    const monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
                    document.getElementById('selectedMonth').textContent = monthNames[selectedMonth - 1];
                }
            }
        }

        function calculateInstallments() {
            const contractAmount = parseInt(document.getElementById('contractAmount').value);
            const installmentCount = parseInt(document.getElementById('installmentCount').value);
            const downPayment = parseInt(document.getElementById('downPayment').value) || 0;

            if (!contractAmount || !installmentCount || !selectedYear || !selectedMonth || !selectedDay) {
                alert('لطفاً تمام فیلدها را پر کنید');
                return;
            }

            const remainingAmount = contractAmount - downPayment;
            const monthlyAmount = Math.ceil(remainingAmount / installmentCount);

            installments = [];
            for (let i = 0; i < installmentCount; i++) {
                const dueDate = addMonths(selectedYear, selectedMonth, selectedDay, i);
                installments.push({
                    number: i + 1,
                    dueDate: dueDate,
                    amount: monthlyAmount,
                    paidAmount: 0,
                    status: 'unpaid',
                    paymentDate: null
                });
            }

            displayContractSummary(contractAmount, downPayment, remainingAmount, monthlyAmount);
            displayInstallmentTable();
            showSections();
        }

        function addMonths(year, month, day, monthsToAdd) {
            let newMonth = month + monthsToAdd;
            let newYear = year;

            while (newMonth > 12) {
                newMonth -= 12;
                newYear++;
            }

            return `${newYear}/${newMonth.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
        }

        function displayContractSummary(contractAmount, downPayment, remainingAmount, monthlyAmount) {
            const summary = `
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <div class="text-sm text-blue-600">مبلغ کل قرارداد</div>
                        <div class="text-lg font-semibold persian-num">${contractAmount.toLocaleString()} ریال</div>
                    </div>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <div class="text-sm text-green-600">پیش پرداخت</div>
                        <div class="text-lg font-semibold persian-num">${downPayment.toLocaleString()} ریال</div>
                    </div>
                    <div class="bg-yellow-50 p-4 rounded-lg">
                        <div class="text-sm text-yellow-600">مبلغ قابل اقساط</div>
                        <div class="text-lg font-semibold persian-num">${remainingAmount.toLocaleString()} ریال</div>
                    </div>
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <div class="text-sm text-purple-600">قسط ماهانه</div>
                        <div class="text-lg font-semibold persian-num">${monthlyAmount.toLocaleString()} ریال</div>
                    </div>
                </div>
            `;
            document.getElementById('summaryContent').innerHTML = summary;
            document.getElementById('contractSummary').classList.remove('hidden');
        }

        function displayInstallmentTable() {
            let tableHTML = `
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
