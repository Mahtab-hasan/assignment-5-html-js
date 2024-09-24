let accountBalance = 5500;

function handleClick(button){
    const donationBtn = document.getElementById('donationBtn');
    const historyBtn = document.getElementById('historyBtn');
    const donationSection = document.getElementById('donationSection');
    const historySection = document.getElementById('historySection');

    if(button ==='donation')
    {
        donationBtn.classList.remove('bg-white');
        donationBtn.classList.add('bg-[#B4F461]');
        historyBtn.classList.remove('bg-[#B4F461]');
        historyBtn.classList.add('bg-white');
        donationSection.classList.remove('hidden');
        historySection.classList.add('hidden');
    }
    else{
        historyBtn.classList.remove('bg-white');
        historyBtn.classList.add('bg-[#B4F461]');
        donationBtn.classList.remove('bg-[#B4F461]');
        donationBtn.classList.add('bg-white');
        donationSection.classList.add('hidden');
        historySection.classList.remove('hidden');
    }
}

function validateInput(input){
    input.value = [...input.value].filter(char => !isNaN(char)||char ==='.').join('');
}
function donate(inputId,amountId,donationName){
    const input = document.getElementById(inputId);
    const donationAmountDisplay = document.getElementById(amountId);
    const amount = parseFloat(input.value);
    if(isNaN(amount)||amount<=0 || amount> accountBalance){
        alert("please enter a valid donation amount");
        return;
    }
    accountBalance -= amount;
    const currentDonationAmount = parseFloat(donationAmountDisplay.textContent)|| 0;
    donationAmountDisplay.textContent = currentDonationAmount+amount+" BDT";
    document.getElementById('accountBalance').textContent = accountBalance + " BDT";
    addToHistory(donationName,amount);
    showModal(`You Donated ${amount} BDT To ${donationName}, Bangladesh`);
    input.value = "";

}
function addToHistory(donationName,amount){
    const historyList = document.getElementById('historyList');
    const date = new Date().toString();

    const historyItemDiv = document.createElement('div');
    historyItemDiv.className = 'border-2  border-gray-300 sm:p-3 p-2 my-2 sm:rounded-lg rounded-md w-11/12 sm:w-full  mx-auto sm:mx-0 ';

    const donationInfo = document.createElement('h1');
    donationInfo.className='text-lg sm:text-xl  font-bold my-3 px-2 ';
    donationInfo.textContent =`${amount} Taka is Donated for ${donationName} at Bangladesh`;

    const dateInfo = document.createElement('p');
    dateInfo.className = 'sm:text-gray-600 bg-slate-50 text-gray-500 sm:my-5 my-4 sm:rounded-lg rounded-md px-5 py-5';
    dateInfo.textContent = ` Date: ${date}`;

    historyItemDiv.appendChild(donationInfo);
    historyItemDiv.appendChild(dateInfo);
    historyList.appendChild(historyItemDiv);
}
function showModal(message){
    document.getElementById('modalMessage').textContent = message;
    const modal = document.getElementById('successModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
}
function closeModal(){
    const modal = document.getElementById('successModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');

}