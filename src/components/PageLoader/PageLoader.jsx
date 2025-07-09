import { Facebook } from "react-content-loader"
import useTheme from "../../contexts/theme"


function PageLoader() {

    const { isDark } = useTheme()

    const MyFacebookLoader = () => <Facebook
                                        backgroundColor="#F2EFE9"
                                    />
    const MyFacebookLoaderDarkMode = () => <Facebook 
                                        backgroundColor="#110726"
                                    />

  return (
    <div className="flex gap-2 items-center justify-center mt-20 text-[var(--black)] dark:text-[var(--white)]">
                {isDark?    MyFacebookLoader()
                        :
                            MyFacebookLoaderDarkMode()
                }
            </div>
  )
}

export default PageLoader
