import { Link } from "react-router-dom";

const styles = {
  linkBtn:
    "bg-gray-700 shadow rounded-lg p-3 cursor-pointer hover:bg-opacity-70 hover:scale-110 hover:shadow-md transition delay-73 duration-300 ease-in-out",
};

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-700 text-center p-3">
      <h1 className="text-2xl mt-16">
        Click one to explore various web components animation
      </h1>
      <ul className="m-5 flex flex-col gap-3">
        <li className={styles.linkBtn}>
          <Link to="/intro-animation">Intro Animation</Link>
        </li>
        <li className={styles.linkBtn}>
          <Link to="/gallery-website">Gallery Website</Link>
        </li>
        <li className={styles.linkBtn}>
          <Link to="./">Animation 3</Link>
        </li>
        <li className={styles.linkBtn}>
          <Link to="./">Animation 4</Link>
        </li>
        <li className={styles.linkBtn}>
          <Link to="./">Animation 5</Link>
        </li>
        <li className={styles.linkBtn}>
          <Link to="./">Animation 6</Link>
        </li>
        <li className={styles.linkBtn}>
          <Link to="./">Animation 7</Link>
        </li>
        <li className={styles.linkBtn}>
          <Link to="./">Animation 8</Link>
        </li>
        <li className={styles.linkBtn}>
          <Link to="./">Animation 9</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
