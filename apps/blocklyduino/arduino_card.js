/**
 * Change arduino card
 */

function shield()
	{
		var msg = "Etes vous sûr de vouloir enregistrer vos données?";
		if (confirm(msg))
		{
			document.getElementById('&lt;%= hide.ClientID %>').value = "oui";
		}
	}

<form id="form1" runat="server">
	<asp:Button ID="butsubmit" Text="GO" runat="server" />
	<asp:HiddenField runat="server" ID="hide" />
</form> 
