import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Cars.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {cars: data}
  }
}

const Cars = ({cars}) => {
  return (
    <>
      <Head>
        <title>Cars | Car Page</title>
        <meta name="keywords" content="car" />
      </Head>
      <div className={styles.container}>
        <h1>Cars List</h1>
        {cars.map(car=> (
          <Link href={'/cars/' + car.id} key={car.id}>
            <a className={styles.single}>
              <h3>{car.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cars;
