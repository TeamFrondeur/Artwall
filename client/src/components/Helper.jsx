const { default: HelperButton } = require("./HelperButton")
const { default: HelperCard } = require("./HelperCard")

const Helper = () => {
    return (
        <div className="helper">
            <h2>Market Your Digital Art</h2>
            <h1>Showcase and Sell Your Art</h1>
            <div className="helper-container">
                <HelperCard 
                    header = "Create Artwork" 
                    text = "Create your collection. Add social links, profile and banner images. Set a secondary sells fee."
                />
                <HelperCard
                    header = "Upload"
                    text = "Upload your work, group multiple artworks together to form collections."
                />
                <HelperCard
                    header = "Listing"
                    text = "Set up and choose between auction, fixed-price listings, and declining-price listings"
                />
            </div>
            <div className="helper-button-container">
                <HelperButton type={"Upload"} />
                <HelperButton type={"Watch"} />
            </div>
        </div>
    )
}