import { ConditionalRoute } from "../router/conditional-route/conditionalroute";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../redux/store";
export const useProtectedRoute = (Component: React.FunctionComponent) =>
    ConditionalRoute(Component, useSelector((state: RootState) => state.auth.loggedIn)
        , '/auth');