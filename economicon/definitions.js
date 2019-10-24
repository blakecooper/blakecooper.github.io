const definitions = [
		[
			"reserveBank", 
			"<p>A nation's central reserve bank is where all gold, commodities and currencies belonging to the nation are kept.<p>The amount of gold held by bankers in their reserves determines the play order. The banker whose nation has the most gold gets to go first whenever the order of play matters.<p>Bankers use gold and native currency in their reserves to make purchases in the market. When they do, they determine the relative value of their purchase and place that amount of gold or native currency in the market from their reserves.<p>At the end of the game, bankers count up the value of all gold, commodities and currency in their reserve, relative to gold (that is, the amount of gold in the market is the numerator in the value formula). If a banker has the most valuable reserves, without having three or greater volatility tokens, that banker wins the game."
		],
];

loadDefinitions();

function loadDefinitions()
{
	for (let i = 0; i < definitions.length; i++)
	{
		let definitionID = definitions[i][0];
		document.getElementById(definitionID).innerHTML = definitions[i][1];
		definitionID = "popover_" + definitions[i][0];
		document.getElementById(definitionID).setAttribute("data-content",definitions[i][1]);
	};
};
