import React, { useEffect } from 'react';
import styled from 'styled-components';

import analytics, { EventType } from '@app/analytics';
import { useRedirectToIntroduceYourself } from '@app/homeV2/introduce/useRedirectToIntroduceYourself';
import { NavBarStateType, useNavBarContext } from '@app/homeV2/layout/navBarRedesign/NavBarContext';
import PersonalizationLoadingModal from '@app/homeV2/persona/PersonalizationLoadingModal';
import { SearchablePage } from '@app/searchV2/SearchablePage';
import { useShowNavBarRedesign } from '@app/useShowNavBarRedesign';

const Container = styled.div<{ $isShowNavBarRedesign?: boolean }>`
    flex: 1;
    display: flex;
    overflow: hidden;
    ${(props) => props.$isShowNavBarRedesign && 'gap: 6px;'}
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

const IframeContainer = styled.div`
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    iframe {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 10px;
        box-shadow: 0 0 20px #aaa;
    }`;

export const BrandPage = () => {
    useRedirectToIntroduceYourself();

    const isShowNavBarRedesign = useShowNavBarRedesign();
    const { setDefaultNavBarState } = useNavBarContext();

    useEffect(() => {
        analytics.event({ type: EventType.BrandPageViewEvent });
    }, []);

    useEffect(() => {
        setDefaultNavBarState(NavBarStateType.Opened);
        return () => setDefaultNavBarState(NavBarStateType.Collapsed);
    });

    return (
        <>
            <SearchablePage>
                <Container data-testid="home-page-content-container" $isShowNavBarRedesign={isShowNavBarRedesign}>
                    <IframeContainer>
                        <iframe
                            src="http://120.27.143.32:9800/"
                            title="Embedded Content"
                            allowFullScreen
                        />
                    </IframeContainer>
                </Container>
            </SearchablePage>
            <PersonalizationLoadingModal />
        </>
    );
};
