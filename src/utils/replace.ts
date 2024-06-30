// Define um tipo utilitário que substitui certos campos de um tipo original por novos tipos.
export type Replace<OriginalType, ReplaceTypes> =
  // Remove os campos de OriginalType que estão em ReplaceTypes.
  Omit<OriginalType, keyof ReplaceTypes> &
    // Adiciona os campos de ReplaceTypes ao tipo resultante.
    ReplaceTypes;
