import crypto from "../assets/crypto.jpg"
import CoinsTable from "../components/CoinsTable/CoinsTable";


function Home() {

  return (
        <>
            <div className="flex flex-col w-full overflow-auto bg-[var(--white)] dark:bg-[var(--black)]">
                <div className="w-full h-[250px] object-cover">
                    <img 
                        src={crypto}
                        alt="background-image" 
                        className="h-[250px] w-full brightness-90"
                    />
                    <div className="w-full absolute text-white text-center top-[70px] left-auto">
                        <small className="font-bold" >Get all info regarding cryptocurrencies</small>
                    </div>
                </div>
                
                <CoinsTable />
            </div>
        </>
  );
}

export default Home;
