//1.
import React from 'react';
import { withAuthenticator} from '@aws-amplify/ui-react'

function Dashboard() {
 return(
    <div>
 
        <h1>This is your logged in dashboard.</h1>
    </div>
 )
}

//6.
export default withAuthenticator(Dashboard)