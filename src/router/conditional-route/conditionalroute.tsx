import { Navigate } from "react-router"

export function ConditionalRoute(
    Component: React.FunctionComponent,
    condition: boolean,
    redirectTo: string
) {
    return function InnerComponent(props: any) {
        return condition ? <Component {...props} /> : <Navigate to={redirectTo} replace />
    }
}

