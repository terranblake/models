### Models
#### These are the models used by @pontilion for all of it's business logic; extracted to a separate repo for modularity

#### Company
    name: string			Long-form identifier e.g. Apple Inc., Ross Stores Inc.
    ticker: string			Short-form identifier e.g. AAPL, ROST

    ref: string				Institution that manages exchanges e.g. Securities and Exchanges Commission
    refId: string			Identifier given by ref organization
    refIndustryId: string	Identifier given by ref for it's industry
	exchange: string		The exchange that the company trades on e.g. NYSE, NASDAQ, CBOE

    fiscalYearEnd: Date		The fiscal year end date for this organization


    state: string
    country: string;
    address: string;
    
    createdAt: Date;		When was the company created
    updatedAt: Date;		When was the company last updated