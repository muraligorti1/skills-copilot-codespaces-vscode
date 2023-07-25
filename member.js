function skillsMember()
{
    var member = document.getElementById("member").value;
    var memberError = document.getElementById("memberError");
    if (member == "")
    {
        memberError.innerHTML = "Please enter your member";
        memberError.style.color = "red";
        return false;
    }
    else
    {
        memberError.innerHTML = "";
        return true;
    }
} git add member.js


