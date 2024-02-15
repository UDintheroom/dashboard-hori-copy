import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
const Title = () => {
    const location = useLocation() // 현재 경로를 가져옴
    const pathnames = location.pathname.split('/').filter((x) => x) // 경로를 '/'로 나누고 빈 문자열을 제거
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to="/">
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
                const isLast = index === pathnames.length - 1
                return (
                    <BreadcrumbItem key={index} isCurrentPage={isLast}>
                        <BreadcrumbLink as={ReactRouterLink} to={routeTo}>
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                )
            })}
        </Breadcrumb>
    )
}
export default Title