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

import containerPortImage from '../assets/surevia/optimized/container-port.jpg'
import diagnosticCommerceImage from '../assets/surevia/coberturas/optimized/comercio-exterior-1.jpg'
import cargaPerecibleImage2 from '../assets/surevia/coberturas/optimized/carga-perecible-2.jpg'
import cargaSecaImage2 from '../assets/surevia/coberturas/optimized/carga-seca-2.jpg'
import caucionSunatImage from '../assets/surevia/coberturas/optimized/caucion-frente-a-sunat.jpg'
import contenedoresImg2 from '../assets/surevia/coberturas/optimized/contenedores-2.jpg'
import rcMtcImage2 from '../assets/surevia/coberturas/optimized/rc-frente-al-mtc-2.jpg'
import seguroVehicularImage from '../assets/surevia/coberturas/optimized/seguro-vehicular.jpg'
import transporteLocalImage from '../assets/surevia/coberturas/optimized/transporte-local.jpg'
import homePlaneImage from '../assets/homeImg/optimized/avionLanding.jpg'
import homeCarsImage from '../assets/homeImg/optimized/carrosLanding.jpg'
import homeContainersImage from '../assets/homeImg/optimized/contenedoresLanding.jpg'
import homePlaneMobileImage from '../assets/homeImg/mobile/avionLandingMobile.png'
import homeCarsMobileImage from '../assets/homeImg/mobile/carrosLandingMobile.png'
import homeContainersMobileImage from '../assets/homeImg/mobile/contenedoresLandingMobile.png'

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
    image: cargaSecaImage2,
  },
  {
    icon: Globe2,
    title: 'Cargas perecibles',
    text: 'Todo riesgo con refrigeración, cold treatment y continuidad de seguro.',
    image: cargaPerecibleImage2,
  },
  {
    icon: Truck,
    title: 'Transporte local',
    text: 'Protección para cargas nacionalizadas o movilizadas dentro del Perú.',
    image: transporteLocalImage,
  },
  {
    icon: FileCheck2,
    title: 'RC frente al MTC',
    text: 'Responsabilidad civil para agentes de carga ante errores u omisiones.',
    image: rcMtcImage2,
  },
  {
    icon: ClipboardCheck,
    title: 'Caución frente a SUNAT',
    text: 'Asesoría y emisión de pólizas caución para agencias de carga.',
    image: caucionSunatImage,
  },
  {
    icon: BadgeCheck,
    title: 'Contenedores',
    text: 'Cobertura del contenedor desde puerto hasta su devolución.',
    image: contenedoresImg2,
  },
  {
    icon: Car,
    title: 'Seguro vehicular',
    text: 'Protección para unidades vinculadas a la operación logística.',
    image: seguroVehicularImage,
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
    mobileImage: homeCarsMobileImage,
    title: 'Cargo Risk Management',
    cta: 'Más información',
  },
  {
    image: homeContainersImage,
    mobileImage: homeContainersMobileImage,
    title: 'Cargo Risk Management',
    cta: 'Más información',
  },
  {
    image: homePlaneImage,
    mobileImage: homePlaneMobileImage,
    title: 'Cargo Risk Management',
    cta: 'Más información',
  },
]

export const diagnosticImages = {
  primary: diagnosticCommerceImage,
}

export const trustVideoPoster = containerPortImage
