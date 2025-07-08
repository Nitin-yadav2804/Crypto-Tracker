import crypto from "../assets/crypto.jpg"
import invertedCrypto from "../assets/invertedCrypto.jpg"
import useTheme from "../contexts/theme";
import CoinsTable from "../components/CoinsTable/CoinsTable";


function Home() {

  const {isDark} = useTheme()


  return (
        <>
            <div className="flex flex-col w-full overflow-auto bg-[var(--white)] dark:bg-[var(--black)]">
                <div className="w-full h-[250px] object-cover">
                    {isDark?
                            <img 
                                src={crypto}
                                alt="background-image" 
                                className="h-[250px] w-full brightness-70"
                            />
                        :
                            <img 
                                src={invertedCrypto}
                                alt="background-image" 
                                className="h-[250px] w-full brightness-70"
                            />}
                </div>
                <CoinsTable />
            </div>
        </>
  );
}

export default Home;
