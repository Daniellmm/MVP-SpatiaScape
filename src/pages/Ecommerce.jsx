import React from 'react'

import { MdKeyboardArrowRight } from 'react-icons/md'

import { earningData, newlyAddedModel, ordersData, ordersGrid } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Inject,
  Page
 } from '@syncfusion/ej2-react-grids'



const Ecommerce = () => {
  return (
    <div className='mt-12'>
      {/* <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
          h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>

          <Button
            color="white"
            bgColor="blue"
            text="Download"
            borderRadius="10px"
            size='md'
          />
         
        </div>

      </div> */}
      <div className='flex m-3 flex(-wrap justify-evenly gap-1 items-center'>
        {earningData.map((item) => (
          <div
            key={item.title}
            className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56
            p-4 pt-9 rounded-2xl'>
            <button
              type='button'
              style={{
                color: item.iconColor,
                backgroundColor: item.iconBg,
              }}
              className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
            >
              {item.icon}
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>
                {item.amount}
              </span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
          </div>
        ))

        }


      </div>

      <div className=' m-2 md:m-10 p-2 md:p-10 bg-white  rounded-2xl'>
        <div className='flex justify-between w-full items-center mb-7'>
          <p className='text-md font-semibold'>Newly Added Models</p>
          <button className='border-2 border-gray-400 p-1 rounded-md text-sm'>
            <div className='flex justify-center items-center'>
              <p className='text-xs'>See More</p>
              <MdKeyboardArrowRight />  
            </div>
          </button>
        </div>

        <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        >
          <ColumnsDirective>
            {ordersGrid.map((item, index) => (
              <ColumnDirective
                key={index} {...item}
              />
            ))

            }
          </ColumnsDirective>
          <Inject services={[
            Resize, ContextMenu, Page
          ]}
          
          />

        </GridComponent>

      </div>


    </div>
  )
}

export default Ecommerce

