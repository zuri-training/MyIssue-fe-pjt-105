import './ContentWrapper.css'

const ContentWrapper = ({ children, type }) => {

  // const checkWrapperType = (wrapperType) => {
  //   switch(wrapperType) {
  //     case 'list':
  //       return (
  //         'Hello'
  //       );
  //     case 'card':
  //       return (
  //         <main>Admins can manage submissions, content, and settings</main>
  //       );
  //     default:
  //       return 'Error: wrapper type not specified.';
  //   }
  // }

  return (
    <div className='contentWrapper-container'>
        {children}
    </div>
  )
}

export default ContentWrapper;