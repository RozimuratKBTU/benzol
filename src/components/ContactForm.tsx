
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Симулируем отправку формы
    setTimeout(() => {
      toast({
        title: "Хабарлама жіберілді",
        description: "Сіздің хабарлама сәтті жіберілді. Біз жақында сізге хабарласамыз.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Аты-жөні
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Сіздің аты-жөніңіз"
          required
          className="w-full"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Электрондық пошта
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email@example.kz"
          required
          className="w-full"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Хабарлама
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Сіздің хабарламаңыз..."
          required
          className="w-full min-h-[120px]"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-benzol-primary hover:bg-benzol-secondary text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Жіберілуде...' : 'Жіберу'}
      </Button>
    </form>
  );
};

export default ContactForm;
