class JuegoTiemposVerbos {
    constructor() {
        this.verbos = [
            {
                "id": 1,
                "verbo": "play",
                "traduccion": "jugar",
                "conjugar_pronombre": [
                    {
                        "pronombre": "I",
                        "traduccion": "yo",
                        "conjugar_tiempos": {
                            "tiempo_presente": {
                                "presente_simple": {
                                    "positivo": {
                                        "conjugacion": "I play",
                                        "traduccion": "yo juego",
                                        "auxiliar": "---"
                                    },
                                    "negativo": {
                                        "conjugacion": "I don't play",
                                        "traduccion": "yo no juego",
                                        "auxiliar": "don't - do not"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Do I play?",
                                        "traduccion": "¿Yo juego?",
                                        "auxiliar": "do"
                                    }
                                },
                                "presente_continuo": {
                                    "positivo": {
                                        "conjugacion": "I am playing",
                                        "traduccion": "yo estoy jugando",
                                        "auxiliar": "am"
                                    },
                                    "negativo": {
                                        "conjugacion": "I am not playing",
                                        "traduccion": "yo no estoy jugando",
                                        "auxiliar": "am not"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Am I playing?",
                                        "traduccion": "¿Yo estoy jugando?",
                                        "auxiliar": "am"
                                    }
                                },
                                "presente_perfecto": {
                                    "positivo": {
                                        "conjugacion": "I have played",
                                        "traduccion": "yo he jugado",
                                        "auxiliar": "have"
                                    },
                                    "negativo": {
                                        "conjugacion": "I have not played",
                                        "traduccion": "yo no he jugado",
                                        "auxiliar": "have not - haven't"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Have I played?",
                                        "traduccion": "¿Yo he jugado?",
                                        "auxiliar": "have"
                                    }
                                },
                                "presente_perfecto_continuo": {
                                    "positivo": {
                                        "conjugacion": "I have been playing",
                                        "traduccion": "yo he estado jugando",
                                        "auxiliar": "have been"
                                    },
                                    "negativo": {
                                        "conjugacion": "I have not been playing",
                                        "traduccion": "yo no he estado jugando",
                                        "auxiliar": "have not been - haven't been"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Have I been playing?",
                                        "traduccion": "¿Yo he estado jugando?",
                                        "auxiliar": "have"
                                    }
                                }
                            },
                            "tiempo_pasado": {
                                "pasado_simple": {
                                    "positivo": {
                                        "conjugacion": "I played",
                                        "traduccion": "yo jugué",
                                        "auxiliar": "---"
                                    },
                                    "negativo": {
                                        "conjugacion": "I didn't play",
                                        "traduccion": "yo no jugué",
                                        "auxiliar": "didn't - did not"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Did I play?",
                                        "traduccion": "¿Yo jugué?",
                                        "auxiliar": "did"
                                    }
                                },
                                "pasado_continuo": {
                                    "positivo": {
                                        "conjugacion": "I was playing",
                                        "traduccion": "yo estaba jugando",
                                        "auxiliar": "was"
                                    },
                                    "negativo": {
                                        "conjugacion": "I wasn't playing",
                                        "traduccion": "yo no estaba jugando",
                                        "auxiliar": "wasn't - was not"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Was I playing?",
                                        "traduccion": "¿Yo estaba jugando?",
                                        "auxiliar": "was"
                                    }
                                },
                                "pasado_perfecto": {
                                    "positivo": {
                                        "conjugacion": "I had played",
                                        "traduccion": "yo había jugado",
                                        "auxiliar": "had"
                                    },
                                    "negativo": {
                                        "conjugacion": "I hadn't played",
                                        "traduccion": "yo no había jugado",
                                        "auxiliar": "hadn't - had not"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Had I played?",
                                        "traduccion": "¿Yo había jugado?",
                                        "auxiliar": "had"
                                    }
                                },
                                "pasado_perfecto_continuo": {
                                    "positivo": {
                                        "conjugacion": "I had been playing",
                                        "traduccion": "yo había estado jugando",
                                        "auxiliar": "had been"
                                    },
                                    "negativo": {
                                        "conjugacion": "I hadn't been playing",
                                        "traduccion": "yo no había estado jugando",
                                        "auxiliar": "hadn't been - had not been"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Had I been playing?",
                                        "traduccion": "¿Yo había estado jugando?",
                                        "auxiliar": "had"
                                    }
                                }
                            },
                            "tiempo_futuro": {
                                "futuro_simple": {
                                    "positivo": {
                                        "conjugacion": "I will play",
                                        "traduccion": "yo jugaré",
                                        "auxiliar": "will"
                                    },
                                    "negativo": {
                                        "conjugacion": "I won't play",
                                        "traduccion": "yo no jugaré",
                                        "auxiliar": "won't - will not"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Will I play?",
                                        "traduccion": "¿Yo jugaré?",
                                        "auxiliar": "will"
                                    }
                                },
                                "futuro_continuo": {
                                    "positivo": {
                                        "conjugacion": "I will be playing",
                                        "traduccion": "yo estaré jugando",
                                        "auxiliar": "will be"
                                    },
                                    "negativo": {
                                        "conjugacion": "I won't be playing",
                                        "traduccion": "yo no estaré jugando",
                                        "auxiliar": "won't be - will not be"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Will I be playing?",
                                        "traduccion": "¿Yo estaré jugando?",
                                        "auxiliar": "will"
                                    }
                                },
                                "futuro_perfecto": {
                                    "positivo": {
                                        "conjugacion": "I will have played",
                                        "traduccion": "yo habré jugado",
                                        "auxiliar": "will have"
                                    },
                                    "negativo": {
                                        "conjugacion": "I won't have played",
                                        "traduccion": "yo no habré jugado",
                                        "auxiliar": "won't have - will not have"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Will I have played?",
                                        "traduccion": "¿Yo habré jugado?",
                                        "auxiliar": "will"
                                    }
                                },
                                "futuro_perfecto_continuo": {
                                    "positivo": {
                                        "conjugacion": "I will have been playing",
                                        "traduccion": "yo habré estado jugando",
                                        "auxiliar": "will have been"
                                    },
                                    "negativo": {
                                        "conjugacion": "I won't have been playing",
                                        "traduccion": "yo no habré estado jugando",
                                        "auxiliar": "won't have been - will not have been"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Will I have been playing?",
                                        "traduccion": "¿Yo habré estado jugando?",
                                        "auxiliar": "will"
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            {
                "id": 2,
                "verbo": "work",
                "traduccion": "trabajar",
                "conjugar_pronombre": [
                    {
                        "pronombre": "I",
                        "traduccion": "yo",
                        "conjugar_tiempos": {
                            "tiempo_presente": {
                                "presente_simple": {
                                    "positivo": {
                                        "conjugacion": "I work",
                                        "traduccion": "yo trabajo",
                                        "auxiliar": "---"
                                    },
                                    "negativo": {
                                        "conjugacion": "I don't work",
                                        "traduccion": "yo no trabajo",
                                        "auxiliar": "don't - do not"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Do I work?",
                                        "traduccion": "¿Yo trabajo?",
                                        "auxiliar": "do"
                                    }
                                },
                                "presente_continuo": {
                                    "positivo": {
                                        "conjugacion": "I am working",
                                        "traduccion": "yo estoy trabajando",
                                        "auxiliar": "am"
                                    },
                                    "negativo": {
                                        "conjugacion": "I am not working",
                                        "traduccion": "yo no estoy trabajando",
                                        "auxiliar": "am not"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Am I working?",
                                        "traduccion": "¿Yo estoy trabajando?",
                                        "auxiliar": "am"
                                    }
                                },
                                "presente_perfecto": {
                                    "positivo": {
                                        "conjugacion": "I have worked",
                                        "traduccion": "yo he trabajado",
                                        "auxiliar": "have"
                                    },
                                    "negativo": {
                                        "conjugacion": "I have not worked",
                                        "traduccion": "yo no he trabajado",
                                        "auxiliar": "have not - haven't"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Have I worked?",
                                        "traduccion": "¿Yo he trabajado?",
                                        "auxiliar": "have"
                                    }
                                },
                                "presente_perfecto_continuo": {
                                    "positivo": {
                                        "conjugacion": "I have been working",
                                        "traduccion": "yo he estado trabajando",
                                        "auxiliar": "have been"
                                    },
                                    "negativo": {
                                        "conjugacion": "I have not been working",
                                        "traduccion": "yo no he estado trabajando",
                                        "auxiliar": "have not been - haven't been"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Have I been working?",
                                        "traduccion": "¿Yo he estado trabajando?",
                                        "auxiliar": "have"
                                    }
                                }
                            },
                            "tiempo_pasado": {
                                "pasado_simple": {
                                    "positivo": {
                                        "conjugacion": "I worked",
                                        "traduccion": "yo trabajé",
                                        "auxiliar": "---"
                                    },
                                    "negativo": {
                                        "conjugacion": "I didn't work",
                                        "traduccion": "yo no trabajé",
                                        "auxiliar": "didn't - did not"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Did I work?",
                                        "traduccion": "¿Yo trabajé?",
                                        "auxiliar": "did"
                                    }
                                },
                                "pasado_continuo": {
                                    "positivo": {
                                        "conjugacion": "I was working",
                                        "traduccion": "yo estaba trabajando",
                                        "auxiliar": "was"
                                    },
                                    "negativo": {
                                        "conjugacion": "I wasn't working",
                                        "traduccion": "yo no estaba trabajando",
                                        "auxiliar": "wasn't - was not"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Was I working?",
                                        "traduccion": "¿Yo estaba trabajando?",
                                        "auxiliar": "was"
                                    }
                                },
                                "pasado_perfecto": {
                                    "positivo": {
                                        "conjugacion": "I had worked",
                                        "traduccion": "yo había trabajado",
                                        "auxiliar": "had"
                                    },
                                    "negativo": {
                                        "conjugacion": "I hadn't worked",
                                        "traduccion": "yo no había trabajado",
                                        "auxiliar": "hadn't - had not"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Had I worked?",
                                        "traduccion": "¿Yo había trabajado?",
                                        "auxiliar": "had"
                                    }
                                },
                                "pasado_perfecto_continuo": {
                                    "positivo": {
                                        "conjugacion": "I had been working",
                                        "traduccion": "yo había estado trabajando",
                                        "auxiliar": "had been"
                                    },
                                    "negativo": {
                                        "conjugacion": "I hadn't been working",
                                        "traduccion": "yo no había estado trabajando",
                                        "auxiliar": "hadn't been - had not been"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Had I been working?",
                                        "traduccion": "¿Yo había estado trabajando?",
                                        "auxiliar": "had"
                                    }
                                }
                            },
                            "tiempo_futuro": {
                                "futuro_simple": {
                                    "positivo": {
                                        "conjugacion": "I will work",
                                        "traduccion": "yo trabajaré",
                                        "auxiliar": "will"
                                    },
                                    "negativo": {
                                        "conjugacion": "I won't work",
                                        "traduccion": "yo no trabajaré",
                                        "auxiliar": "won't - will not"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Will I work?",
                                        "traduccion": "¿Yo trabajaré?",
                                        "auxiliar": "will"
                                    }
                                },
                                "futuro_continuo": {
                                    "positivo": {
                                        "conjugacion": "I will be working",
                                        "traduccion": "yo estaré trabajando",
                                        "auxiliar": "will be"
                                    },
                                    "negativo": {
                                        "conjugacion": "I won't be working",
                                        "traduccion": "yo no estaré trabajando",
                                        "auxiliar": "won't be - will not be"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Will I be working?",
                                        "traduccion": "¿Yo estaré trabajando?",
                                        "auxiliar": "will"
                                    }
                                },
                                "futuro_perfecto": {
                                    "positivo": {
                                        "conjugacion": "I will have worked",
                                        "traduccion": "yo habré trabajado",
                                        "auxiliar": "will have"
                                    },
                                    "negativo": {
                                        "conjugacion": "I won't have worked",
                                        "traduccion": "yo no habré trabajado",
                                        "auxiliar": "won't have - will not have"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Will I have worked?",
                                        "traduccion": "¿Yo habré trabajado?",
                                        "auxiliar": "will"
                                    }
                                },
                                "futuro_perfecto_continuo": {
                                    "positivo": {
                                        "conjugacion": "I will have been working",
                                        "traduccion": "yo habré estado trabajando",
                                        "auxiliar": "will have been"
                                    },
                                    "negativo": {
                                        "conjugacion": "I won't have been working",
                                        "traduccion": "yo no habré estado trabajando",
                                        "auxiliar": "won't have been - will not have been"
                                    },
                                    "interrogativo": {
                                        "conjugacion": "Will I have been working?",
                                        "traduccion": "¿Yo habré estado trabajando?",
                                        "auxiliar": "will"
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        ];
        this.conjugaciones = [];
        this.preguntaActual = 0;
        this.aciertos = 0;
        this.errores = 0;
        this.respuestasSeleccionadas = {
            tiempo: null,
            variacion: null,
            tipo: null
        };
        
        // Información de explicaciones de tiempos verbales
        this.explicaciones = {
            'PRESENTE': {
                'Simple': 'Describe cosas que pasan habitualmente, rutinas o verdades generales.',
                'Continuo': 'Describe cosas que están pasando en el momento actual.',
                'Perfecto': 'Describe cosas que han pasado y tienen relevancia en el presente.',
                'Perfecto Continuo': 'Describe cosas que han estado pasando durante un período de tiempo.'
            },
            'PASADO': {
                'Simple': 'Describe cosas que pasaron en un momento específico del pasado.',
                'Continuo': 'Describe cosas que estaban pasando en un momento específico del pasado.',
                'Perfecto': 'Describe cosas que habían pasado antes de otro evento en el pasado.',
                'Perfecto Continuo': 'Describe cosas que habían estado pasando durante un período antes de otro evento.'
            },
            'FUTURO': {
                'Simple': 'Describe cosas que pasarán en el futuro.',
                'Continuo': 'Describe cosas que estarán pasando en un momento específico del futuro.',
                'Perfecto': 'Describe cosas que habrán pasado antes de un momento específico en el futuro.',
                'Perfecto Continuo': 'Describe cosas que habrán estado pasando durante un período antes de un momento específico.'
            }
        };
        
        this.inicializarEventos();
    }

    inicializarEventos() {
        // Botones de navegación
        document.getElementById('btn-iniciar').addEventListener('click', () => {
            console.log('Botón iniciar clickeado');
            this.iniciarJuego();
        });
        document.getElementById('btn-reiniciar').addEventListener('click', () => this.reiniciarJuego());
        document.getElementById('btn-inicio').addEventListener('click', () => this.mostrarPantalla('inicio'));

        // Eventos para las opciones
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('opcion')) {
                this.seleccionarOpcion(e.target);
            }
        });

        // Eventos del modal
        document.getElementById('btn-cerrar-modal').addEventListener('click', () => this.cerrarModal());
        
        // Cerrar modal al hacer clic fuera de él
        document.getElementById('modal-explicacion').addEventListener('click', (e) => {
            if (e.target.id === 'modal-explicacion') {
                this.cerrarModal();
            }
        });
    }

    iniciarJuego() {
        console.log('Iniciando juego...');
        console.log('Número de verbos:', this.verbos.length);
        
        this.prepararConjugaciones();
        this.preguntaActual = 0;
        this.aciertos = 0;
        this.errores = 0;
        this.mostrarPantalla('juego');
        this.mostrarPregunta();
    }

    prepararConjugaciones() {
        this.conjugaciones = [];
        
        // Seleccionar un verbo al azar
        const verboAleatorio = this.verbos[Math.floor(Math.random() * this.verbos.length)];
        console.log('Verbo seleccionado:', verboAleatorio.verbo);
        
        // Obtener todas las conjugaciones del verbo
        verboAleatorio.conjugar_pronombre.forEach(pronombre => {
            // Iterar por todos los tiempos (presente, pasado, futuro)
            Object.keys(pronombre.conjugar_tiempos).forEach(tiempoKey => {
                const tiempos = pronombre.conjugar_tiempos[tiempoKey];
                
                Object.keys(tiempos).forEach(variacionKey => {
                    const variacion = tiempos[variacionKey];
                    Object.keys(variacion).forEach(tipoKey => {
                        const conjugacion = variacion[tipoKey];
                        
                        this.conjugaciones.push({
                            verbo: verboAleatorio.verbo,
                            traduccion: verboAleatorio.traduccion,
                            conjugacion: conjugacion.conjugacion,
                            traduccionConjugacion: conjugacion.traduccion,
                            tiempo: this.obtenerNombreTiempo(tiempoKey),
                            variacion: this.obtenerNombreVariacion(variacionKey),
                            tipo: this.obtenerNombreTipo(tipoKey),
                            auxiliar: conjugacion.auxiliar
                        });
                    });
                });
            });
        });
        
        console.log('Conjugaciones preparadas:', this.conjugaciones.length);
        
        // Mezclar las conjugaciones aleatoriamente
        this.conjugaciones = this.shuffleArray(this.conjugaciones);
    }

    obtenerNombreTiempo(tiempoKey) {
        const nombres = {
            'tiempo_presente': 'PRESENTE',
            'tiempo_pasado': 'PASADO',
            'tiempo_futuro': 'FUTURO'
        };
        return nombres[tiempoKey] || tiempoKey;
    }

    obtenerNombreVariacion(variacionKey) {
        const nombres = {
            'presente_simple': 'Simple',
            'presente_continuo': 'Continuo',
            'presente_perfecto': 'Perfecto',
            'presente_perfecto_continuo': 'Perfecto Continuo',
            'pasado_simple': 'Simple',
            'pasado_continuo': 'Continuo',
            'pasado_perfecto': 'Perfecto',
            'pasado_perfecto_continuo': 'Perfecto Continuo',
            'futuro_simple': 'Simple',
            'futuro_continuo': 'Continuo',
            'futuro_perfecto': 'Perfecto',
            'futuro_perfecto_continuo': 'Perfecto Continuo'
        };
        return nombres[variacionKey] || variacionKey;
    }

    obtenerNombreTipo(tipoKey) {
        const nombres = {
            'positivo': 'Positiva',
            'negativo': 'Negativa',
            'interrogativo': 'Interrogativa'
        };
        return nombres[tipoKey] || tipoKey;
    }

    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    mostrarPregunta() {
        if (this.preguntaActual >= this.conjugaciones.length) {
            this.finalizarJuego();
            return;
        }

        const conjugacion = this.conjugaciones[this.preguntaActual];
        
        // Actualizar información del verbo
        document.getElementById('verbo-actual').textContent = conjugacion.verbo;
        document.getElementById('traduccion-actual').textContent = conjugacion.traduccion;
        
        // Mostrar oración
        document.getElementById('oracion-texto').textContent = conjugacion.conjugacion;
        document.getElementById('traduccion-oracion').textContent = conjugacion.traduccionConjugacion;
        
        // Generar opciones
        this.generarOpciones('tiempo', conjugacion.tiempo);
        this.generarOpciones('variacion', conjugacion.variacion);
        this.generarOpciones('tipo', conjugacion.tipo);
        
        // Actualizar estadísticas
        this.actualizarEstadisticas();
        
        // Limpiar selecciones
        this.respuestasSeleccionadas = { tiempo: null, variacion: null, tipo: null };
        document.getElementById('btn-responder').disabled = true;
        document.getElementById('btn-responder').textContent = 'Responder';
        
        // Restaurar el evento original del botón
        document.getElementById('btn-responder').onclick = () => this.verificarRespuesta();
    }

    generarOpciones(tipo, respuestaCorrecta) {
        const opciones = [];
        
        if (tipo === 'tiempo') {
            opciones.push('PASADO', 'PRESENTE', 'FUTURO');
        } else if (tipo === 'variacion') {
            opciones.push('Simple', 'Continuo', 'Perfecto', 'Perfecto Continuo');
        } else if (tipo === 'tipo') {
            opciones.push('Positiva', 'Negativa', 'Interrogativa');
        }
        
        // Mezclar opciones
        const opcionesMezcladas = this.shuffleArray(opciones);
        
        const container = document.getElementById(`opciones-${tipo}`);
        container.innerHTML = '';
        
        opcionesMezcladas.forEach(opcion => {
            const elemento = document.createElement('div');
            elemento.className = 'opcion';
            elemento.textContent = opcion;
            elemento.dataset.tipo = tipo;
            elemento.dataset.valor = opcion;
            container.appendChild(elemento);
        });
    }

    seleccionarOpcion(elemento) {
        const tipo = elemento.dataset.tipo;
        const valor = elemento.dataset.valor;
        
        // Deseleccionar otras opciones del mismo tipo
        document.querySelectorAll(`.opcion[data-tipo="${tipo}"]`).forEach(op => {
            op.classList.remove('seleccionada');
        });
        
        // Seleccionar la opción actual
        elemento.classList.add('seleccionada');
        this.respuestasSeleccionadas[tipo] = valor;
        
        // Habilitar botón de responder si todas las opciones están seleccionadas
        if (this.respuestasSeleccionadas.tiempo && 
            this.respuestasSeleccionadas.variacion && 
            this.respuestasSeleccionadas.tipo) {
            document.getElementById('btn-responder').disabled = false;
        }
    }

    verificarRespuesta() {
        const conjugacion = this.conjugaciones[this.preguntaActual];
        let aciertosPregunta = 0;
        
        // Almacenar las respuestas del usuario para mostrar en el modal
        const respuestasUsuario = {
            tiempo: '',
            variacion: '',
            tipo: ''
        };
        
        // Verificar cada respuesta
        const verificaciones = [
            { tipo: 'tiempo', correcta: conjugacion.tiempo },
            { tipo: 'variacion', correcta: conjugacion.variacion },
            { tipo: 'tipo', correcta: conjugacion.tipo }
        ];
        
        verificaciones.forEach(verificacion => {
            const opciones = document.querySelectorAll(`.opcion[data-tipo="${verificacion.tipo}"]`);
            opciones.forEach(opcion => {
                if (opcion.classList.contains('seleccionada')) {
                    // Guardar la respuesta del usuario
                    respuestasUsuario[verificacion.tipo] = opcion.dataset.valor;
                    
                    if (opcion.dataset.valor === verificacion.correcta) {
                        aciertosPregunta++;
                    }
                }
            });
        });
        
        // Actualizar estadísticas
        if (aciertosPregunta === 3) {
            this.aciertos++;
            this.actualizarEstadisticas();
            // Si acertó todo, continuar directamente
            this.continuarSiguientePregunta();
        } else {
            this.errores++;
            this.actualizarEstadisticas();
            // Si falló, mostrar modal de explicación con las respuestas
            this.mostrarModalExplicacion(conjugacion, respuestasUsuario);
        }
    }

    actualizarEstadisticas() {
        document.getElementById('pregunta-actual').textContent = this.preguntaActual + 1;
        document.getElementById('total-preguntas').textContent = this.conjugaciones.length;
        document.getElementById('aciertos').textContent = this.aciertos;
        document.getElementById('errores').textContent = this.errores;
        
        // Actualizar barra de progreso
        const progreso = ((this.preguntaActual) / this.conjugaciones.length) * 100;
        document.getElementById('progress-fill').style.width = `${progreso}%`;
    }

    finalizarJuego() {
        const porcentaje = Math.round((this.aciertos / (this.aciertos + this.errores)) * 100);
        
        document.getElementById('aciertos-final').textContent = this.aciertos;
        document.getElementById('errores-final').textContent = this.errores;
        document.getElementById('porcentaje-final').textContent = `${porcentaje}%`;
        
        this.mostrarPantalla('resultados');
    }

    reiniciarJuego() {
        this.iniciarJuego();
    }

    mostrarModalExplicacion(conjugacion, respuestasUsuario) {
        // Configurar el contenido del modal header con la oración en inglés y su traducción
        document.getElementById('modal-oracion-ingles').textContent = conjugacion.conjugacion;
        document.getElementById('modal-oracion-traduccion').textContent = conjugacion.traduccionConjugacion;
        document.getElementById('modal-auxiliar').textContent = conjugacion.auxiliar;
        
        // Mostrar las respuestas del usuario y las correctas
        const respuestasUsuarioTexto = `${respuestasUsuario.tiempo} - ${respuestasUsuario.variacion} - ${respuestasUsuario.tipo}`;
        const respuestasCorrectasTexto = `${conjugacion.tiempo} - ${conjugacion.variacion} - ${conjugacion.tipo}`;
        
        document.getElementById('modal-respuesta-usuario').textContent = respuestasUsuarioTexto;
        document.getElementById('modal-respuesta-correcta').textContent = respuestasCorrectasTexto;
        
        // Generar el contenido de explicación
        const explicacion = this.explicaciones[conjugacion.tiempo][conjugacion.variacion];
        const contenido = `
            <div class="explicacion-item">
                <div class="explicacion-tiempo">${conjugacion.tiempo} ${conjugacion.variacion}</div>
                <div class="explicacion-descripcion">${explicacion}</div>
            </div>
        `;
        
        document.getElementById('modal-explicacion-contenido').innerHTML = contenido;
        
        // Mostrar el modal
        document.getElementById('modal-explicacion').classList.add('active');
    }
    
    cerrarModal() {
        document.getElementById('modal-explicacion').classList.remove('active');
        // Avanzar automáticamente a la siguiente pregunta
        this.preguntaActual++;
        this.mostrarPregunta();
        // Posicionar al inicio de la pantalla para mejor experiencia de usuario
        window.scrollTo(0, 0);
    }
    
    continuarSiguientePregunta() {
        // Deshabilitar botón y cambiar texto
        document.getElementById('btn-responder').disabled = true;
        document.getElementById('btn-responder').textContent = 'Siguiente';
        
        // Cambiar el evento del botón para avanzar a la siguiente pregunta
        document.getElementById('btn-responder').onclick = () => {
            this.preguntaActual++;
            this.mostrarPregunta();
            // Posicionar al inicio de la pantalla para mejor experiencia de usuario
            window.scrollTo(0, 0);
        };
    }

    mostrarPantalla(pantalla) {
        // Ocultar todas las pantallas
        document.querySelectorAll('.pantalla').forEach(p => p.classList.add('oculto'));
        
        // Mostrar la pantalla solicitada
        switch (pantalla) {
            case 'inicio':
                document.getElementById('pantalla-inicio').classList.remove('oculto');
                break;
            case 'juego':
                document.getElementById('pantalla-juego').classList.remove('oculto');
                break;
            case 'resultados':
                document.getElementById('pantalla-resultados').classList.remove('oculto');
                break;
        }
    }
}

// Inicializar el juego cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada, inicializando juego...');
    new JuegoTiemposVerbos();
});
