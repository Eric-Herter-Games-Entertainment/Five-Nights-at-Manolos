# Five Nights at Manolo's 3 — iOS

Compilación automática de **FNAM 3** para iPhone mediante GitHub Actions, en un archivo `FNAM3-unsigned.ipa` sin firma.

La versión móvil del juego (`FNAM3_Mobile.html`) se descarga directamente de la release oficial `FNAM3_Multiplatfor_Edition`. El workflow verifica el SHA-256 y empaqueta el juego sin modificarlo.

La aplicación usa `WKWebView`, pantalla completa, orientación horizontal, nombre propio e icono integrado mediante `AppIcon.appiconset`.

Para obtener el IPA: **Actions** > **Build FNAM 3 iOS (unsigned IPA)** > ejecución completada > **Artifacts** > **FNAM3-unsigned-IPA**.

El icono de origen es una versión compacta del icono aportado para FNAM 3. Para máxima nitidez en iPhone conviene sustituirlo por la versión completa en PNG, aunque esta compilación sí incluye icono.

El IPA no está firmado y requiere un procedimiento de firma válido para instalarse en un dispositivo real. La compilación no verifica el comportamiento del juego en un iPhone físico.
