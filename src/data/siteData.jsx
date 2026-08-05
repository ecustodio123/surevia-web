import {
  BadgeCheck,
  Car,
  ClipboardCheck,
  Container,
  FileCheck2,
  Globe2,
  ShieldCheck,
  Truck,
} from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp } from 'react-icons/fa'

import cargoPortImage from '../assets/surevia/optimized/cargo-port-cranes.jpg'
import cargoShipImage from '../assets/surevia/optimized/cargo-ship-harbor.jpg'
import carsRoadImage from '../assets/surevia/optimized/cars-road.jpg'
import containerPortImage from '../assets/surevia/optimized/container-port.jpg'
import diagnosticImageOne from '../assets/surevia/optimized/surevia-diagnostic-01.jpg'
import diagnosticImageTwo from '../assets/surevia/optimized/surevia-diagnostic-02.jpg'
import contenedoresImg from '../assets/surevia/optimized/surevia-containers.jpg'
import homePlaneImage from '../assets/homeImg/optimized/avionLanding.jpg'
import homeCarsImage from '../assets/homeImg/optimized/carrosLanding.jpg'
import homeContainersImage from '../assets/homeImg/optimized/contenedoresLanding.jpg'

export const navigation = [
  { label: 'Inicio', path: '/home' },
  { label: 'Diagnóstico', path: '/diagnostico' },
  { label: 'Coberturas', path: '/coberturas' },
  { label: 'Respaldo', path: '/respaldo' },
  { label: 'Contacto', path: '/contacto' },
]

export const coverageItems = [
  {
    icon: Container,
    title: 'Carga seca',
    text: 'Cobertura puerta a puerta ante averías, robo, asalto, guerra y huelgas.',
    image: cargoPortImage,
  },
  {
    icon: Globe2,
    title: 'Cargas perecibles',
    text: 'Todo riesgo con refrigeración, cold treatment y continuidad de seguro.',
    image: cargoShipImage,
  },
  {
    icon: Truck,
    title: 'Transporte local',
    text: 'Protección para cargas nacionalizadas o movilizadas dentro del Perú.',
    image: carsRoadImage,
  },
  {
    icon: FileCheck2,
    title: 'RC frente al MTC',
    text: 'Responsabilidad civil para agentes de carga ante errores u omisiones.',
    image: containerPortImage,
  },
  {
    icon: ClipboardCheck,
    title: 'Caución frente a SUNAT',
    text: 'Asesoría y emisión de pólizas caución para agencias de carga.',
    image: containerPortImage,
  },
  {
    icon: BadgeCheck,
    title: 'Contenedores',
    text: 'Cobertura del contenedor desde puerto hasta su devolución.',
    image: contenedoresImg,
  },
  {
    icon: Car,
    title: 'Seguro vehicular',
    text: 'Protección para unidades vinculadas a la operación logística.',
    image: carsRoadImage,
  },
]

export const otherCoverageItems = [
  {
    icon: Container,
    title: 'Stock only',
    text: 'Cobertura para mercadería almacenada en puntos definidos.',
  },
  {
    icon: Car,
    title: 'Seguro vehicular',
    text: 'Protección para unidades vinculadas a la operación logística.',
  },
  {
    icon: Globe2,
    title: 'Seguro de viaje',
    text: 'Asistencia y protección para viajes corporativos o personales.',
  },
  {
    icon: ShieldCheck,
    title: 'Otros seguros',
    text: 'Evaluamos coberturas adicionales según el tipo de operación.',
  },
]

export const insuranceOptions = [...new Map([...coverageItems, ...otherCoverageItems].map((item) => (
  [item.title, item]
))).values()]

export const whatsappNumber = '51974630063'
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Hola, quiero solicitar un diagnóstico para mi operación logística.',
)}`

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61592151513245', icon: FaFacebookF },
  { label: 'Instagram', href: 'https://www.instagram.com/surevia.group/', icon: FaInstagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/victoria-goicochea', icon: FaLinkedinIn },
  { label: 'TikTok', href: 'https://www.tiktok.com/@surevia.group', icon: FaTiktok },
  { label: 'WhatsApp', href: whatsappHref, icon: FaWhatsapp },
]

export const homeSlides = [
  {
    image: homeCarsImage,
    title: 'Cargo Risk Management',
    cta: 'Más información',
  },
  {
    image: homeContainersImage,
    title: 'Cargo Risk Management',
    cta: 'Más información',
  },
  {
    image: homePlaneImage,
    title: 'Cargo Risk Management',
    cta: 'Más información',
  },
]

export const diagnosticImages = {
  primary: diagnosticImageOne,
  secondary: diagnosticImageTwo,
}

export const trustVideoPoster = containerPortImage
