import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: process.env.REACT_APP_SANITY_PRODUCT_KEY,
    dataset: "production",
    apiVersion: "2022-10-18",
    useCdn: true,
});