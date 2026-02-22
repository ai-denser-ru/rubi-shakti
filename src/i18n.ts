import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    es: {
        translation: {
            "nav": {
                "home": "Inicio",
                "catalog": "Catálogo",
                "therapy": "Terapia",
                "about": "Sobre Mí",
                "blog": "Blog",
                "contact": "Contacto",
                "book": "Reservar Sesión"
            },
            "hero": {
                "badge": "Especialistas en Columna",
                "subtitle": "Rehabilitación de Columna Experta",
                "title1": "Sana tu Cuerpo,",
                "title2": "Transforma tu Vida",
                "description": "Yoga y Pilates Terapéutico para la salud de la columna y el bienestar. Prácticas guiadas de primera calidad diseñadas por Rubí Shakti para restaurar tu movilidad y paz.",
                "cta": "Comienza tu Viaje",
                "secondary_cta": "Ver Especialidades"
            },
            "catalog": {
                "title": "Catálogo de",
                "title_accent": "Rehabilitación",
                "description": "Selecciona tu área de enfoque и progresa a través de nuestros niveles terapéuticos respaldados científicamente.",
                "levels": {
                    "beginner": "Principiante",
                    "intermediate": "Intermedio",
                    "advanced": "Avanzado"
                },
                "view_program": "Ver Programa",
                "courses": {
                    "cervical": {
                        "title": "Cuidado Cervical",
                        "description": "Alivia la tensión del cuello y mejora la movilidad de la columna superior."
                    },
                    "lumbar": {
                        "title": "Alivio Lumbar",
                        "description": "Fortalece tu espalda baja y recupera el movimiento funcional."
                    },
                    "dorsal": {
                        "title": "Salud Dorsal",
                        "description": "Corrige la postura y abre la columna torácica para una mejor respiración."
                    }
                }
            },
            "about": {
                "badge": "Sobre Mí",
                "title": "Conoce a",
                "title_accent": "Rubí Shakti",
                "description1": "Nuestra misión es cerrar la brecha entre la sabiduría yóguica antigua y la precisión biomecánica moderna. Esica, la fundadora de Rubí Shakti, ha dedicado su carrera a la salud de la columna y al movimiento terapéutico.",
                "description2": "Cada práctica es un viaje hacia la restauración, centrándose en neutralizar el dolor и revitalizar la curva natural de la columna. No solo enseñamos movimiento; enseñamos sanación.",
                "stats": {
                    "exp": "Años de Experticia",
                    "lives": "Vidas Transformadas",
                    "practices": "Prácticas Guiadas"
                }
            },
            "player": {
                "badge": "Práctica de Prueba Gratuita",
                "title": "Experimenta el Método",
                "title_accent": "Rubí Shakti",
                "description": "Comienza tu viaje de sanación con una sesión guiada de 10 minutos. Comprende nuestro enfoque único en la biomecánica de la columna и el flujo terapéutico.",
                "features": {
                    "precision": "Precisión Anatómica",
                    "breath": "Flujo Guiado por la Respiración",
                    "techniques": "Técnicas de Alivio de Columna",
                    "guidance": "Guía Premium"
                },
                "cta": "Obtener Acceso Total",
                "biomechanical": "Enfoque Biomecánico",
                "expert": "Guía Experta"
            },
            "donation": {
                "title": "Apoya Nuestra",
                "title_accent": "Misión",
                "description": "Si nuestras prácticas te han ayudado a encontrar alivio, considera apoyar la continuación de este proyecto. Cada contribución nos ayuda a crear más sesiones terapéuticas para quienes lo necesitan.",
                "items": {
                    "coffee": {
                        "title": "Invita a un Café",
                        "sub": "Apoyo pequeño único"
                    },
                    "wallets": {
                        "title": "Billeteras Digitales",
                        "sub": "PayPal / Cripto"
                    },
                    "support": {
                        "title": "Apoyo Continuo",
                        "sub": "Patrocinio mensual"
                    }
                },
                "direct": "Contribución Directa",
                "accepted": "Se acepta ERC-20 / BTC / Solana"
            },
            "footer": {
                "description": "Especialistas en rehabilitación de columna a través del yoga y pilates terapéutico. Sanando cuerpos, transformando vidas.",
                "explore": "Explorar",
                "contact": "Contacto"
            }
        }
    },
    en: {
        translation: {
            "nav": {
                "home": "Home",
                "catalog": "Catalog",
                "therapy": "Therapy",
                "about": "About Me",
                "blog": "Blog",
                "contact": "Contact",
                "book": "Book Session"
            },
            "hero": {
                "badge": "Spine Specialists",
                "subtitle": "Expert Spine Rehabilitation",
                "title1": "Heal Your Body,",
                "title2": "Transform Your Life",
                "description": "Therapeutic Yoga & Pilates for Spine Health and Wellbeing. Premium guided practices designed by Rubí Shakti to restore your mobility and peace.",
                "cta": "Start Your Journey",
                "secondary_cta": "View Specializations"
            },
            "catalog": {
                "title": "Rehabilitation",
                "title_accent": "Catalog",
                "description": "Select your focus area and progress through our scientifically backed therapeutic levels.",
                "levels": {
                    "beginner": "Beginner",
                    "intermediate": "Intermediate",
                    "advanced": "Advanced"
                },
                "view_program": "View Program",
                "courses": {
                    "cervical": {
                        "title": "Cervical Care",
                        "description": "Relieve neck tension and improve upper spine mobility."
                    },
                    "lumbar": {
                        "title": "Lumbar Relief",
                        "description": "Strengthen your lower back and recover functional movement."
                    },
                    "dorsal": {
                        "title": "Dorsal Health",
                        "description": "Correct posture and open the thoracic spine for better breathing."
                    }
                }
            },
            "about": {
                "badge": "About Me",
                "title": "Meet",
                "title_accent": "Rubí Shakti",
                "description1": "Our mission is to bridge the gap between ancient yogic wisdom and modern biomechanical precision. Esica, the founder of Rubí Shakti, has dedicated her career to spinal health and therapeutic movement.",
                "description2": "Each practice is a journey towards restoration, focusing on neutralizing pain and revitalizing the spine's natural curve. We don't just teach movement; we teach healing.",
                "stats": {
                    "exp": "Years of Expertise",
                    "lives": "Lives Transformed",
                    "practices": "Guided Practices"
                }
            },
            "player": {
                "badge": "Free Trial Practice",
                "title": "Experience the",
                "title_accent": "Rubí Shakti Method",
                "description": "Start your healing journey with a 10-minute guided session. Understand our unique focus on spinal biomechanics and therapeutic flow.",
                "features": {
                    "precision": "Anatomical Precision",
                    "breath": "Breath-Guided Flow",
                    "techniques": "Spine Relief Techniques",
                    "guidance": "Premium Guidance"
                },
                "cta": "Get Full Access",
                "biomechanical": "Biomechanical Focus",
                "expert": "Expert Guidance"
            },
            "donation": {
                "title": "Support Our",
                "title_accent": "Mission",
                "description": "If our practices have helped you find relief, consider supporting the continuation of this project. Every contribution helps us create more therapeutic sessions for those in need.",
                "items": {
                    "coffee": {
                        "title": "Buy a Coffee",
                        "sub": "Small one-time support"
                    },
                    "wallets": {
                        "title": "Digital Wallets",
                        "sub": "PayPal / Crypto"
                    },
                    "support": {
                        "title": "Ongoing Support",
                        "sub": "Monthly patronage"
                    }
                },
                "direct": "Direct Contribution",
                "accepted": "ERC-20 / BTC / Solana Accepted"
            },
            "footer": {
                "description": "Specialists in spinal rehabilitation through yoga and therapeutic pilates. Healing bodies, transforming lives.",
                "explore": "Explore",
                "contact": "Contact"
            }
        }
    },
    fr: {
        translation: {
            "nav": {
                "home": "Accueil",
                "catalog": "Catalogue",
                "therapy": "Thérapie",
                "about": "À Propos",
                "blog": "Blog",
                "contact": "Contact",
                "book": "Réserver"
            },
            "hero": {
                "badge": "Spécialistes du Dos",
                "subtitle": "Rééducation du Dos Expertise",
                "title1": "Guérissez votre Corps,",
                "title2": "Transformez votre Vie",
                "description": "Yoga et Pilates Thérapeutique pour la santé de la colonne vertébrale et le bien-être. Pratiques guidées haut de gamme conçues par Rubí Shakti pour restaurar votre mobilité et votre paix.",
                "cta": "Commencez votre Voyage",
                "secondary_cta": "Voir Spécialisations"
            },
            "catalog": {
                "title": "Catalogue de",
                "title_accent": "Rééducation",
                "description": "Sélectionnez votre zone de concentration и progressez à travers nos niveaux thérapeutiques scientifiquement validés.",
                "levels": {
                    "beginner": "Débutant",
                    "intermediate": "Intermédiaire",
                    "advanced": "Avancé"
                },
                "view_program": "Voir le Programme",
                "courses": {
                    "cervical": {
                        "title": "Soins Cervicaux",
                        "description": "Soulagez la tension du cou et améliorez la mobilité de la colonne supérieure."
                    },
                    "lumbar": {
                        "title": "Soulagement Lombaire",
                        "description": "Renforcez votre bas du dos et retrouvez un mouvement fonctionnel."
                    },
                    "dorsal": {
                        "title": "Santé Dorsale",
                        "description": "Corrigez la posture et ouvrez la colonne thoracique pour une meilleure respiration."
                    }
                }
            },
            "about": {
                "badge": "À Propos",
                "title": "Rencontrez",
                "title_accent": "Rubí Shakti",
                "description1": "Notre mission est de combler l'écart entre la sagesse yoguique ancienne et la précision biomécanique moderne. Esica, la fondatrice de Rubí Shakti, a consacré sa carrière à la santé de la colonne vertébrale et au mouvement thérapeutique.",
                "description2": "Chaque pratique est un voyage vers la restauration, se concentrant sur la neutralisation de la douleur и la revitalisation de la courbe naturelle de la colonne. Nous n'enseignons pas seulement le mouvement ; nous enseignons la guérison.",
                "stats": {
                    "exp": "Années d'Expertise",
                    "lives": "Vies Transformées",
                    "practices": "Pratiques Guidées"
                }
            },
            "player": {
                "badge": "Séance d'Essai Gratuite",
                "title": "Découvrez la Méthode",
                "title_accent": "Rubí Shakti",
                "description": "Commencez votre voyage de guérison avec une séance guidée de 10 minutes. Comprenez notre concentration unique sur la biomécanique de la colonne и le flux thérapeutique.",
                "features": {
                    "precision": "Précision Anatomique",
                    "breath": "Flux Guidé par la Respiration",
                    "techniques": "Techniques de Soulagement",
                    "guidance": "Guidage Premium"
                },
                "cta": "Obtenir l'Accès Complet",
                "biomechanical": "Focus Biomécanique",
                "expert": "Guide Expert"
            },
            "donation": {
                "title": "Soutenez Notre",
                "title_accent": "Mission",
                "description": "Si nos pratiques vous ont aidé à trouver du soulagement, envisagez de soutenir la continuation de ce projet. Chaque contribution nous aide à créer plus de séances thérapeutiques.",
                "items": {
                    "coffee": {
                        "title": "Offrir un Café",
                        "sub": "Petit soutien ponctuel"
                    },
                    "wallets": {
                        "title": "Portefeuilles Numériques",
                        "sub": "PayPal / Crypto"
                    },
                    "support": {
                        "title": "Soutien Continu",
                        "sub": "Parrainage mensuel"
                    }
                },
                "direct": "Contribution Directe",
                "accepted": "ERC-20 / BTC / Solana Accepté"
            },
            "footer": {
                "description": "Spécialistes de la rééducation vertébrale par le yoga et le pilates thérapeutique. Guérir les corps, transformer les vies.",
                "explore": "Explorer",
                "contact": "Contact"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
