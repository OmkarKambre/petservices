'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { bookService } from '@/app/actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function BookingForm() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    try {
      const result = await bookService(formData)
      toast.success(result.message)
      // Reset form
      const form = document.querySelector('form') as HTMLFormElement
      form.reset()
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="bg-purple-900/20 border-purple-800">
      <CardContent className="p-6">
        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Name</Label>
            <Input
              id="name"
              name="name"
              required
              className="bg-purple-900/20 border-purple-800 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-purple-900/20 border-purple-800 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service" className="text-white">Service</Label>
            <Select name="service" required>
              <SelectTrigger className="bg-purple-900/20 border-purple-800 text-white">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="walking" className="text-white">Dog Walking</SelectItem>
                <SelectItem value="sitting" className="text-white">Pet Sitting</SelectItem>
                <SelectItem value="daycare" className="text-white">Day Care</SelectItem>
                <SelectItem value="training" className="text-white">Training</SelectItem>
                <SelectItem value="grooming" className="text-white">Grooming</SelectItem>
                <SelectItem value="transport" className="text-white">Pet Transport</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date" className="text-white">Preferred Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              required
              className="bg-purple-900/20 border-purple-800 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-white">Additional Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              className="bg-purple-900/20 border-purple-800 text-white"
              placeholder="Tell us about your pet and any special requirements"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Book Service"}
          </Button>
        </form>
        <ToastContainer />
      </CardContent>
    </Card>
  )
}
