# FNAM 2 para iPhone: compilación IPA sin firma

Este proyecto genera una app nativa que abre la **versión móvil original** en WKWebView en orientación horizontal, sin controles de Safari. No cambia el HTML del juego.

## Generar el IPA sin Mac

1. En GitHub, abre **Actions** > **Build FNAM 2 iOS (unsigned IPA)**.
2. Haz clic en **Run workflow**, rama `main`.
3. Tras una ejecución correcta, abre el resultado del workflow y descarga el artefacto **FNAM2-unsigned-IPA**.
4. Dentro del ZIP de GitHub Actions estará `FNAM2-unsigned.ipa`.

El workflow descarga `FNAF2_MOVIL.html` desde la release oficial de FNAM 2 y valida su SHA-256 antes de compilar. Lo empaqueta dentro del IPA (unos 299 MB de HTML original).

El icono se genera dentro del workflow a partir de `icon-source.jpg`. Es una versión reducida de la imagen recibida; para nitidez máxima se puede sustituir por el PNG original de 1024x1024 antes de volver a compilar.

**Importante:** el IPA no está firmado. No se puede instalar directamente como una aplicación normal de la App Store; se requiere firma válida compatible con el dispositivo. La compilación exitosa no garantiza compatibilidad del motor del juego con WKWebView en un iPhone real, por lo que debe probarse en el dispositivo.

Identificador: `com.erichertergames.fnam2`.
