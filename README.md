### Models
#### These are the models used by @postilion for all of it's business logic; extracted to a separate repo for modularity

#### Company
    name: string				Long-form identifier e.g. Apple Inc., Ross Stores Inc.
    ticker: string				Short-form identifier e.g. AAPL, ROST

    ref: string					Institution that manages exchanges e.g. Securities and Exchanges Commission
    refId: string				Identifier given by ref organization
    refIndustryId: string		Identifier given by ref for it's industry
	exchange: string			The exchange that the company trades on e.g. NYSE, NASDAQ, CBOE

    fiscalYearEnd: Date			The fiscal year end date for this organization

    state: string				?
    country: string;			?
    address: string;			?
    
	createdAt: Date;			When was the company created
    updatedAt: Date;			When was the company last updated

#### Filing
	company: Company			ID for the company that created this filing
	type: string				Type of filing e.g. 10-K, 10-Q, S-2
	status: string				Status of the filing e.g. seeded, crawling, downloaded

	url: string				The location where this filing can be found
	name: string				Name of the filing as reported at the url it was found

	period: Date				What date did this filing start at
	fiscalYearEnd: Date			What is the fiscal year end for this filing
	publishedAt: Date			Date that the recieving organization published it to the source location
	filedAt: Date				Date that the company filed this filing
	acceptedAt: Date;			Date that the filing was accepted to the source location

	source: string				The location where this filing was published to
	refId: string				Unique identifier for the source location
	accessionNumber: string			Unique identifier for the source location
	fileNumber: string			?

	createdAt: Date				Date this filing was created
	updatedAt: Date				Date this filing was last updated

#### Filing Document
	filing: Filing				Filing that this document comes from
	company: Company			Company that this document comes from

	type: string				Filing document type e.g. instance, calculation, label

	status: string				Status of this document e.g. seed, downloading, crawled
	statusReason: string			Long-form explanation of the status

	sequenceNumber: string			Which order was this document when reported
	
	fileName: string			Name of the file
	fileType: string			Type of file e.g. .xsd, .xls, .csv
	fileSize: string			Size of the file
	
	fileDescription: string			?
	fileUrl: string				Where this document can be found at
	
	createdAt: Date				Date when this document was introduced
	updatedAt: Date				Date when this document was last updated