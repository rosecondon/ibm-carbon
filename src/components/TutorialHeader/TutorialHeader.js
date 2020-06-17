import React from 'react';
/* Import Icons */
import Notification20 from "@carbon/icons-react/lib/notification/20";
import UserAvatar20 from "@carbon/icons-react/lib/user--avatar/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
/* import Link class so that we can switch route, to the UI Shell to have it work with the React router */
import { Link } from "react-router-dom"

import {
    Header,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
} from "carbon-components-react/lib/components/UIShell";

/* use Link element in HeaderName to prevent full page reload when navigate to diff pages */
const TutorialHeader = () => (
    <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderName element={Link} to="/" prefix="IBM">
            Carbon Tutorial
        </HeaderName>
        <HeaderNavigation aria-label="Carbon Tutorial">
        <HeaderMenuItem element={Link} to="/repos">Repositories</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Notifications">
                <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User Avatar">
                <UserAvatar20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App Switcher">
                <AppSwitcher20 />
            </HeaderGlobalAction>
        </HeaderGlobalBar>
    </Header>
);

export default TutorialHeader;