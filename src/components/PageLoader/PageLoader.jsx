import { Code } from "react-content-loader"
import useTheme from "../../contexts/theme"


function PageLoader() {

    const { isDark } = useTheme()

    const MyFacebookLoader = () => <Code
                                        backgroundColor="#F2EFE9"
                                    />
    const MyFacebookLoaderDarkMode = () => <Code 
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
