var letras= ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var dni= prompt("Ingrese su DNI");
	total=dni%23;
	if(dni<99999999)
	{
		alert("INVALIDO");
	}
	else
		if(dni>0)
		{
			alert("su letra dni es "+ letras[total]);
		}