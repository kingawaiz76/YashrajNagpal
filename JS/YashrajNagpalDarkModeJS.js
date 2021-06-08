if(localStorage.getItem('darkMode') === 'enabled')
{
	document.body.classList.toggle('dark');
}

document.querySelector('.darkMode').addEventListener('click', () =>
{
	document.body.classList.toggle('dark');
	
	if (document.body.classList.contains('dark')) 
	{
 		localStorage.setItem('darkMode', 'enabled');
	}
	else
	{
	  	localStorage.removeItem('darkMode');
	}

})
