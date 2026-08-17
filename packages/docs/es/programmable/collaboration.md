---
title: Collaboration
description: Edición conjunta en tiempo real mediante P2P WebRTC, sin servidor central.
---

# Collaboration

Varias personas pueden editar el mismo documento a la vez. Los Peers se conectan directamente mediante WebRTC y no se necesita una cuenta.

## Compartir un Room

1. Abre el Share button de la esquina superior derecha.
2. Copia el enlace `app.openpencil.dev/share/<room-id>`.
3. Envíalo a los demás participantes.

Cualquier persona con el enlace puede entrar. El Room permanece accesible mientras al menos un participante mantenga la Page abierta.

## Datos sincronizados

- **Documento:** cambios en Shapes, Text, Properties y Layout;
- **Cursors:** Position, Name y Color de cada participante;
- **Selections:** objetos seleccionados por otros Peers.

## Follow mode

Haz Click en un Avatar de la barra superior para seguir el Viewport de ese Peer. Pan y Zoom se adaptan a su vista. Otro Click detiene Follow mode.

## Funcionamiento

WebRTC transmite los datos del diseño directamente entre Peers. Un Application server central no retransmite los cambios del documento.

Yjs sincroniza el estado como CRDT y combina automáticamente las modificaciones simultáneas. IndexedDB guarda el estado local para que un Reload del mismo Room pueda recuperarlo.

## Consejos

- Collaboration funciona en el navegador y en la aplicación de escritorio.
- Los Room IDs se generan con valores aleatorios criptográficamente seguros. Solo puede entrar quien conozca el enlace.
- Los Cursors y Presence entries de Peers desconectados se eliminan automáticamente.
