export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((car) => {
    return {
      params: { id: car.id.toString() },
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { car: data },
  };
};
const Details = ({ car }) => {
  return (
    <div>
      <h1>{car.name} </h1>
      <h1>{car.email} </h1>
      <h1>{car.website} </h1>
      <h1>{car.address.city} </h1>
    </div>
  );
};

export default Details;
