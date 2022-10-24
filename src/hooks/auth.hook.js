import { useEffect } from "react"
import { useCallback, useState } from "react"


export const useAuth = () => {
    const [status, setStatus] = useState(null)
    // состояние чтобы понимать находится ли пользователь на платформе
    const [profile, setProfile] = useState({
        object: ''
    })
    // профиль 

    const [code, setCode] = useState('')
    //для того чтобы войти с помощью кода

    const login = useCallback((status, profile) => {
        const code = JSON.parse(localStorage.getItem('userCode'))
        // принимаем код
        setCode(code)
        // если там вместо кода токен, то нужно его указать
        setProfile(profile)
        setStatus(status)

        localStorage.setItem('userProfile', JSON.stringify({data: profile}))
        localStorage.setItem('userStatus', JSON.stringify({profile: profile}))

        //сохраняем в js то что указали и переводим в JSON формат статус(авторизован или нет) и профиль 


    },[])

    const logout = useCallback(() => {
        setProfile({})
            setStatus(null)


            localStorage.removeItem('userProfile')
            localStorage.removeItem('userStatus')
            localStorage.removeItem('userCode')
    }, [])


    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem('userProfile'))
        const status = JSON.parse(localStorage.getItem('userStatus'))

        if (status) {
            login(status.status, profile.data)
        }
    }, [])

    return { login, logout, status, profile, code }

}



