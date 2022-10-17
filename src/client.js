import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: process.env.REACT_APP_SANITY_PRODUCT_KEY,
    dataset: "production"
});