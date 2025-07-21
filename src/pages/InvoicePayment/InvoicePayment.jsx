import React, { useState } from 'react'
import { AutomatedPaymentCancellation } from '../../components/invoices/automatedPaymentCancellation'
import { SubscriptionRemainderNotification } from '../../components/invoices/subscriptionRemainderNotification'
import DownloadInvoiceReportForm from '../../components/invoices/DownloadInvoiceReports'
import Invoices from '../../components/invoices/invoiceTable'
import CustomPagination from '../../hooks/CustomPagination'

const InvoicePayment = () => {
    const [currentPage, setCurrentPage] = useState(1);
      const totalPages = 10;
  return (
    <div className="text-white flex flex-col overflow-hidden mb-5">
      <Invoices />
      <div className="flex justify-between items-center mb-4">
        <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      <AutomatedPaymentCancellation />
      <SubscriptionRemainderNotification />
      <DownloadInvoiceReportForm />
    </div>
  )
}

export default InvoicePayment
