export async function getServerSideProps() {
    console.log("hello")
    return {
        props: {},
    };
}

export function Listing({}) {
    return <div>Listing</div>;
}
