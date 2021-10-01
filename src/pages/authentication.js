import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import AuthContent from 'components/AuthContent'

function authenticationPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<AuthContent />
		</Layout>
	)
}
authenticationPage.propTypes = {
	location: PropTypes.object,
}
export default authenticationPage
