import searchIcon from './search.svg'
import notFoundIcon from './notFound.svg'
import emptyIcon from './empty.svg'

export const NotFound = ({ icon }) => {
  switch (icon) {
    case 'empty':
      return (
        <div className="empty">
          <div className="empty__content">
            <img src={emptyIcon} />
            <span>Repository list is empty</span>
          </div>
        </div>
      )
    case 'search':
      return (
        <div className="empty">
          <div className="empty__content">
            <img src={searchIcon} />
            <span>Start with searching a GitHub user</span>
          </div>
        </div>
      )
    case 'notFound':
      return (
        <div className="empty">
          <div className="empty__content">
            <img src={notFoundIcon} />
            <span>User not found</span>
          </div>
        </div>
      )

    default:
      return <></>
  }
}
