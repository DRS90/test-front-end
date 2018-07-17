
const pagination = ({ total = 1, activePage = 1 } = {}) => {
  if (!handleErrors({ total, activePage })) {
    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1)
    }

    const visiblePages = 3
    let pages = [
      1,
      ...Array.from({ length: visiblePages }, (_, i) => i + centerRule({ total, activePage })),
      total
    ]
    pages = pages.filter((page, index, array) => array.indexOf(page) === index)

    const initialPages = ifActivePageOneOfTheFirst(pages)
    if (!!initialPages) {
      pages = initialPages
    }
    const endingPages = ifActivePageOneOfTheLast(pages)
    if (!!endingPages) {
      pages = endingPages
    }

    return pages
  }
}

const isNumber = value => typeof value === 'number'

const centerRule = ({ total, activePage }) => (
  activePage - 1 <= 0
    ? 1
    : activePage === total
      ? activePage - 2
      : activePage - 1
)

const handleErrors = ({ total, activePage }) => {
  if (!isNumber(total)) {
    throw new TypeError('total should be a number')
    return true
  }
  if (!isNumber(activePage)) {
    throw new TypeError('activePage should be a number')
    return true
  }
  return false
}

const ifActivePageOneOfTheFirst = pages => {
  let firstPage = pages[0]
  let secondPage = pages[1]
  if (secondPage === (firstPage + 2)) {
    pages = [
      firstPage,
      firstPage + 1,
      ...pages.slice(1)
    ]
    return pages
  }
  if (secondPage > (firstPage + 2)) {
    pages = [
      firstPage,
      '...',
      ...pages.slice(1)
    ]
    return pages
  }
}

const ifActivePageOneOfTheLast = pages => {
  let penultimatePage = pages[pages.length - 2]
  let lastPage = pages[pages.length - 1]
  if (penultimatePage === (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1),
      lastPage - 1,
      lastPage
    ]
    return pages
  }
  if (penultimatePage <= (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1),
      '...',
      lastPage
    ]
    return pages
  }
}

export default pagination