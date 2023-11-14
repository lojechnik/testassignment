import { Navigate } from "react-router"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { RootState } from "../../redux/store"
export function ConditionalRoute(
    Component: React.FunctionComponent,
    condition: boolean,
    redirectTo: string
) {
    return function InnerComponent(props: any) {
        return condition ? <Component {...props} /> : <Navigate to={redirectTo} replace />
    }
}

