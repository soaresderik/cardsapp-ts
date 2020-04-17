export interface State {
  cards: string[];
}

export interface InputCards {
  cards: string[];
  rotationCard: string;
}

export interface DeckListResponse {
  success: boolean;
  deck_id: string;
  remaining: string;
  piles: {
    [key: string]: {
      cards: Cards[];
    };
  };
}

export interface Cards {
  image: string;
  value: string;
  suit: string;
  code: string;
}
