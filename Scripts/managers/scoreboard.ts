module managers {
    export class ScoreBoard {
        // member variables
        private _lives:number;
        private _score:number;
        private _livesLabel:objects.Label;
        private _scoreLabel:objects.Label;

        // properties

        /**
         * Returns a reference to the LivesLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get LivesLabel():objects.Label {
            return this._livesLabel;
        }

        /**
         * Returns a reference to the ScoreLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get ScoreLabel():objects.Label {
            return this._scoreLabel;
        }

        get Lives():number {
            return this._lives;
        }

        set Lives(newValue:number) {
            this._lives = newValue;
            this.LivesLabel.text = "Lives: " + this._lives;
        }

        get Score():number {
            return this._score;
        }

        set Score(newValue:number) {
            this._score = newValue;
            this.ScoreLabel.text = "Score: " + this._score;
        }
        
        // constructor
        constructor() {

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas","#FFFF00", 20, 20, false);
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#FFFF00", 370, 20, false);
            this.Reset();
        }

        public Reset():void {
            this.Lives = 5;
            this.Score = 0;
        }

    }
}