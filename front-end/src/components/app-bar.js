import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import Expand from 'material-ui/svg-icons/navigation/expand-more'
import {loadCategories} from './categories/actions'

class ReadableAppBar extends React.Component {

  constructor (props) {
    super(props)
    this.handleChangeSingle = this.handleChangeSingle.bind(this)
    this.iconMenuButton = this.iconMenuButton.bind(this)
  }

  handleChangeSingle (value) {
    return () => {
      const target = value === 'All Posts' ? '' : value.toLowerCase()
      this.props.history.push(`/${target}`)
    }
  }

  iconMenuButton (categories, selected) {
    return (
      <IconMenu
        iconButtonElement={<IconButton><Expand /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem primaryText='Show posts from:' disabled />
        <MenuItem primaryText='All Categories' onClick={this.handleChangeSingle('All Posts')} />
        {categories.map((category) => {
          return (<MenuItem key={category.path} primaryText={category.path} onClick={this.handleChangeSingle(category.path)} />)
        })}
      </IconMenu>
    )
  }

  componentWillMount () {
    if (!this.props.categories || !this.props.categories.length) {
      this.props.getCategories()
    }
  }

  render () {
    const { categories } = this.props
    return (
      <AppBar title={this.props.title} iconElementLeft={this.iconMenuButton(categories, this.props.match.params.category)} />
    )
  }
}

function mapStateToProps ({ posts }) {
  const { categories } = posts
  if (!categories) {
    return {categories: []}
  }
  return { categories }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: data => dispatch(loadCategories(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReadableAppBar))
