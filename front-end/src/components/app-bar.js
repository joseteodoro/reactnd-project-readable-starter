import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import Expand from 'material-ui/svg-icons/navigation/menu'
import {loadCategories} from './categories/actions'
import {fetchPosts, fetchPostsByCategory} from './post/actions'
import PostSorting from './post/post-sort'

class ReadableAppBar extends React.Component {

  constructor (props) {
    super(props)
    this.handleChangeSingle = this.handleChangeSingle.bind(this)
    this.iconMenuButton = this.iconMenuButton.bind(this)
  }

  handleChangeSingle (value) {
    return () => {
      const target = value === 'All Posts' ? '' : value.toLowerCase()
      if (target) {
        this.props.getCategoryPosts(target)
      } else {
        this.props.getPosts()
      }
      this.props.history.push(`/${target}`)
    }
  }

  iconMenuButton (categories, selected) {
    return (
      <IconMenu key='app-menu'
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

  componentDidMount () {
    if (!this.props.categories || !this.props.categories.length) {
      this.props.getCategories()
    }
  }

  render () {
    const { categories } = this.props
    return (
      <AppBar title={this.props.title} iconElementLeft={this.iconMenuButton(categories, this.props.match.params.category)}
        iconElementRight={<PostSorting />} />
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
    getCategories: data => dispatch(loadCategories(data)),
    getPosts: data => dispatch(fetchPosts(data)),
    getCategoryPosts: data => dispatch(fetchPostsByCategory(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReadableAppBar))
