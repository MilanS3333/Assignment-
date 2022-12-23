const f_name = document.getElementById('fnm');
const l_name = document.getElementById('lnm');
const email = document.getElementById('em');
const m_number = document.getElementById('mo');
// const gender = document.getElementById('gn');
const birth = document.getElementById('dob');
const submit = document.getElementById('sub');

// submit.addEventListener('click',return validateForm())

// console.log(f_name);
const ex_name = /^[a-zA-Z]{3,6}$/;
const ex_mobile = /^[0-9]{10}$/;

function validateForm()
{
    // for first name
    if(f_name.value == "")
    {
        alert('Please enter first Name');
        return false;
    }
    if(!ex_name.test(f_name.value))
    {
        alert('only 3 to 6 alphabets');
        return false;
    }

    // for last name
    if(l_name.value == "")
    {
        alert('Please enter last Name');
        return false;
    }
    if(!ex_name.test(l_name.value))
    {
        alert('only 3 to 6 alphabets');
        return false;
    }

    // for email
    if(email.value == "")
    {
        alert('Please enter Email');
        return false;
    }

    // for number
    if(m_number.value == "")
    {
        alert('Please enter number');
        return false;
    }
    if(!ex_mobile.test(m_number.value))
    {
        alert('10 digits only');
        return false;
    }

    // for birth date
    if(birth.value == "")
    {
        alert('Please enter birth date');
        return false;
    }
}