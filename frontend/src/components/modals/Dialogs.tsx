import { Dialog } from '@material-ui/core';
import React, { ReactNode, useEffect, useMemo } from 'react';
import { Route, RouteComponentProps, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { I } from '../../@types/Interface';
import usePoPUPchild from '../../hooks/usePoPUPchild';
import usePrepareLink from '../../hooks/usePrepareLink';

type TDialogs = {
  to:string
  children:ReactNode
}


export const Dialogs: React.FC<TDialogs> = ({children,to}): JSX.Element => {
  const { back } = usePrepareLink()
  const childrenWithProps = usePoPUPchild(children)
  
  
  return (
    <>
    <Route path={to}
         render={
           ({ match }) => {
             return (
              <Dialog onClose={back} open={Boolean(match)}>
                {childrenWithProps?.map((val: any) => val)}
              </Dialog>
             )
           }
         }
      />
    </>  
  )
}
