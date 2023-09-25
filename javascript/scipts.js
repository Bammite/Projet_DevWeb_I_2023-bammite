/* La fonction de contrainte de confirmation du mot de passe*/
function estvalide()
{
        var password = document.getElementById("password").value;
        var password_confirm= document.getElementById("password_confirm").value;

        if (password != password_confirm) {
            alert("La confirmation du mot de passe ne correspond pas au mot de passe saisi.");
            return false;
        }

        return true;
   }
