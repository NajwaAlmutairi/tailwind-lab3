import './App.css'
import Benefits from './components/benefits'
import Home from './components/home'
import CustomerSay from './components/CustomerSay'
import Feature from './components/Feature'

function App() {

  return (
    <>
      {/* <h1>test</h1> */}
      <Home />
      <Benefits />
      {/* <div>
        <img
          src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fb065d811-70a9-454e-947e-699ec2801a37%2FScreen_Shot_2023-11-26_at_11.01.17_AM_cleanup.png?table=block&id=fff185a2-dff1-8155-8342-ca7bab2c8a64&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2"
          alt="Background Image"
          className="w-full h-64 object-cover"
        /> */}
        <CustomerSay />
      {/* </div> */}
      <div className="bg-gray-200 p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Feature img={'https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F5f62f496-1e54-4012-8d8f-2f1000fe5bc5%2FUntitled.png?table=block&id=fff185a2-dff1-810c-b130-ed4997ed8b92&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=910&userId=&cache=v2'}
            title={'Feature 1'} text={'Talk about some of the details of your offer with a focus on the value people get back.'} />
          <Feature img={'https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F63d3a2f3-3120-4ed7-b1aa-aa020cb5e16c%2FUntitled.png?table=block&id=fff185a2-dff1-8164-8d80-ed3cf65ef67b&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=910&userId=&cache=v2'}
            title={'Feature 2'} text={'Is there a pain point that your product service resolves? Tell visitors about it here.'} />
          <Feature img={'https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F63d3a2f3-3120-4ed7-b1aa-aa020cb5e16c%2FUntitled.png?table=block&id=fff185a2-dff1-8164-8d80-ed3cf65ef67b&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=910&userId=&cache=v2'}
            title={'Feature 3'} text={'Alternatively, you could use this section to address some frequently asked questions.'} />
        </div>
      </div>

    </>
  )
}

export default App
